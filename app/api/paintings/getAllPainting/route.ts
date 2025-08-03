import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');
        const limit = searchParams.get('limit');
        const offset = searchParams.get('offset');
        const search = searchParams.get('search');

        const where = {
            ...(userId && { userId }),
            ...(search && {
                OR: [
                    { title: { contains: search, mode: 'insensitive' as const } },
                    { artist: { contains: search, mode: 'insensitive' as const } },
                    { description: { contains: search, mode: 'insensitive' as const } },
                ],
            }),
        };

        const paintings = await prisma.painting.findMany({
            where,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
            ...(limit && { take: parseInt(limit) }),
            ...(offset && { skip: parseInt(offset) }),
        });

        const total = await prisma.painting.count({ where }); return NextResponse.json({
            paintings,
            total,
            limit: limit ? parseInt(limit) : null,
            offset: offset ? parseInt(offset) : null,
        });
    } catch (error) {
        console.error('Error fetching paintings:', error);
        return NextResponse.json(
            { error: 'Failed to fetch paintings' },
            { status: 500 }
        );
    }
}