import { withAuth } from 'next-auth/middleware';

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
  matcher: ['/admin/:path*'],
};
