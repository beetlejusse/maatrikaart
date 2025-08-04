import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch total paintings count
    const totalPaintings = await prisma.painting.count();

    // Fetch website views from the PageView table
    const websiteViews = await prisma.pageView.count();

    // Get the last updated painting date
    const lastPainting = await prisma.painting.findFirst({
      orderBy: { updatedAt: 'desc' },
      select: { updatedAt: true }
    });

    const lastUpdated = lastPainting?.updatedAt.toLocaleDateString() || new Date().toLocaleDateString();

    return NextResponse.json({
      websiteViews,
      totalPaintings,
      lastUpdated,
    });

  } catch (error) {
    console.error("Analytics fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
