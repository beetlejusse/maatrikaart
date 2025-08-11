import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { PageViewTracker } from "@/components/Navbar";
// import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "maatrikaart",
  description: "Art Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased tracking-wide`}>
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
          `,
          }}
        />
        <PageViewTracker />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
