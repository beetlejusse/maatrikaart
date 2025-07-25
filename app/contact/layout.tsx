import NavBar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "maatrikaart | सम्पर्क",
  description: "Art Gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen w-full relative bg-white">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(circle at center, #kd9854 0%, transparent 70%)
      `,
              opacity: 0.6,
              mixBlendMode: "multiply",
            }}
          />
          <NavBar />

          {children}
        </div>
      </body>
    </html>
  );
}
``;
