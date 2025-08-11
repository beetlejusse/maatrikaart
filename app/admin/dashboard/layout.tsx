"use client";

import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <main className="">
        <div className="min-h-screen w-full relative bg-white">
          {/* Warm Orange Glow Top */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#ffffff",
              backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(255, 140, 60, 0.5),
          transparent 70%
        )
      `,
              filter: "blur(80px)",
              backgroundRepeat: "no-repeat",
            }}
          />
          {children}
        </div>
      </main>
    </SessionProvider>
  );
}
