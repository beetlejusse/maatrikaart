import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    
    if (!path) {
      return NextResponse.json(
        { error: "Path is required" },
        { status: 400 }
      );
    }

    // Get IP address from request headers (if available)
    const ipAddress = request.headers.get("x-forwarded-for") || 
                     request.headers.get("x-real-ip") || 
                     "unknown";
    
    // Get user agent
    const userAgent = request.headers.get("user-agent") || "unknown";
    
    // Record the page view
    await prisma.pageView.create({
      data: {
        path,
        ipAddress: typeof ipAddress === 'string' ? ipAddress.split(',')[0].trim() : 'unknown',
        userAgent
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error recording page view:", error);
    return NextResponse.json(
      { error: "Failed to record page view" },
      { status: 500 }
    );
  }
}
