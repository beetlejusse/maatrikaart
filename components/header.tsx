"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="cursor-pointer">
            <div className="font-serif text-xl text-gray-900">Maatrika Art</div>
          </Link>

          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/30 md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
          )}

          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }
            md:flex md:items-center md:space-x-8
          `}
          >
            <button
              className="md:hidden absolute top-6 right-6 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              {/* About with underline hover + smooth scroll */}
              <a
                href="#about"
                className="relative text-gray-800 hover:text-primary transition-colors duration-300 font-serif after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About the Artist
              </a>
              <a
                href="#join-us"
                className="relative text-gray-800 hover:text-primary transition-colors duration-300 font-serif cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                onClick={(e) => handleSmoothScroll(e, "join-us")}
              >
                Join US
              </a>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link href={`${process.env.NEXT_PUBLIC_EMAIL_URL}`}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Contact
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Explore Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </nav>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
