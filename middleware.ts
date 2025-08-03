import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // This is a server-side solution for tracking page views
  // You can add logic here to record page views if you want a more accurate count
  // However, for simplicity, we're using the client-side approach with the PageViewTracker component
  
  return response;
}

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const pathname = req.nextUrl.pathname;
      
      if (pathname.startsWith('/admin/login') || 
          pathname.startsWith('/admin/signup') ||
          pathname.startsWith('/api/auth') ||
          pathname.startsWith('/api/signup')) {
        return true;
      }
      
      // Protect other admin routes
      if (pathname.startsWith('/admin')) {
        return !!token;
      }
      
      return true; 
    },
  },
});

export const config = {
  matcher: ['/admin/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
