import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Painting ID is required' },
                { status: 400 }
            );
        }

        // Check if painting exists
        const existingPainting = await prisma.painting.findUnique({
            where: { id },
        });

        if (!existingPainting) {
            return NextResponse.json(
                { error: 'Painting not found' },
                { status: 404 }
            );
        }

        // Delete painting
        await prisma.painting.delete({
            where: { id },
        }); return NextResponse.json(
            { message: 'Painting deleted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting painting:', error);
        return NextResponse.json(
            { error: 'Failed to delete painting' },
            { status: 500 }
        );
    }
}