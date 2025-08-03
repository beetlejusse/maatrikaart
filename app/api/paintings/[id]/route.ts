import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const painting = await prisma.painting.findUnique({
      where: { id: params.id },
    });

    if (!painting) {
      return NextResponse.json(
        { error: "Painting not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(painting);
  } catch (error) {
    console.error("Error fetching painting:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
