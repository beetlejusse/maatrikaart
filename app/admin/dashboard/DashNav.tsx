"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

interface LinkItem {
  href: string;
  label: string;
}

export default function DashNav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

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
              href="/admin/dashboard"
              className="flex font-serif text-2xl font-extrabold text-rose-800 items-center justify-center"
            >
              Maatrika Art
            </Link>

            <div className="flex items-center space-x-4 md:space-x-6">
              <Link
                href="/"
                className="text-pink-600 hover:text-pink-800 font-bold"
                target="_blank"
              >
                View Site
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Out
              </button>
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
        <div className="md:hidden fixed inset-0 top-16 bg-white/50 backdrop-blur-xl z-40 p-4"></div>
      )}
    </div>
  );
}
