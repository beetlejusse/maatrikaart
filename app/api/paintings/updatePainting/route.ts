import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, title, artist, description, imageUrl, price, year, userId } = body;

        if (!id) {
            return NextResponse.json(
                { error: 'Painting ID is required' },
                { status: 400 }
            );
        }

        const existingPainting = await prisma.painting.findUnique({
            where: { id },
        });

        if (!existingPainting) {
            return NextResponse.json(
                { error: 'Painting not found' },
                { status: 404 }
            );
        }

        if (userId && userId !== existingPainting.userId) {
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                return NextResponse.json(
                    { error: 'User not found' },
                    { status: 404 }
                );
            }
        }

        const updatedPainting = await prisma.painting.update({
            where: { id },
            data: {
                ...(title && { title }),
                ...(artist && { artist }),
                ...(description !== undefined && { description }),
                ...(imageUrl && { imageUrl }),
                ...(price !== undefined && { price: price ? parseFloat(price) : null }),
                ...(year !== undefined && { year: year ? parseInt(year) : null }),
                ...(userId && { userId }),
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
            { message: 'Painting updated successfully', painting: updatedPainting },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating painting:', error);
        return NextResponse.json(
            { error: 'Failed to update painting' },
            { status: 500 }
        );
    }
}
