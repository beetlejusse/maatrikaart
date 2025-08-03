import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, artist, description, imageUrl, price, year, userId } = body;

        if (!title || !artist || !imageUrl || !userId) {
            return NextResponse.json(
                { error: 'Title, artist, imageUrl, and userId are required' },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        const painting = await prisma.painting.create({
            data: {
                title,
                artist,
                description,
                imageUrl,
                price: price ? parseFloat(price) : null,
                year: year ? parseInt(year) : null,
                userId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        }); return NextResponse.json(
            { message: 'Painting created successfully', painting },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating painting:', error);
        return NextResponse.json(
            { error: 'Failed to create painting' },
            { status: 500 }
        );
    }
}