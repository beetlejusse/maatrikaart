"use client";

import { useState, useEffect } from "react";
import { List, X, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  href: string;
  label: string;
}

const Links: LinkItem[] = [
  { href: "/gallery", label: "प्रदर्शनी" },
  { href: "/artist", label: "कलाकार" },
  { href: "/contact", label: "सम्पर्क" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in">
      <div
        className={cn(
          "transition-all duration-500 ease-out mx-auto",
          scrolled
            ? "mt-6 max-w-6xl bg-white/10 backdrop-blur-2xl rounded-lg shadow-2xl shadow-black/50"
            : "max-w-6xl mt-4 bg-white/10 backdrop-blur-2xl rounded-lg shadow-2xl shadow-black/50"
        )}
      >
        <div className="container mx-auto py-1 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex font-serif text-2xl font-extrabold text-rose-800 items-center justify-center"
            >
              Maatrika Art
            </Link>

            <nav className="hidden md:flex items-center space-x-8 mr-32">
              {Links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xl text-pink-600 font-medium tracking-wide transition-colors hover:text-pink-800",
                    pathname === link.href && "text-pink-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                href="/search"
                className="relative text-pink-600 hover:text-pink-800 font-bold"
              >
                <MagnifyingGlassIcon
                  size={20}
                  className="hover:scale-110 duration-300 transition-transform"
                />
                <span className="sr-only">Search</span>
              </Link>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-pink-600 hover:text-pink-800 hover:bg-transparent"
                >
                  {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white/50 backdrop-blur-xl z-40 p-4">
          <nav className="flex flex-col space-y-4">
            {Links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-semibold text-pink-700 transition-colors hover:text-pink-800 text-center py-2 rounded-md",
                  pathname === link.href && "text-pink-600 bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
