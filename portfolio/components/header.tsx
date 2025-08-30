"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";

export default function Header() {
  const MAATRIKA_URL = process.env.NEXT_PUBLIC_MAATRIKA_ART_URL;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-4">
      <Link href="/">
        <div className="flex items-center">
          <span className="translate-x-[-0.5px] text-white text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
            Prakash Papnai
          </span>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-2 flex-wrap">
        <a
          href="/gallery"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Gallery
        </a>
        <a
          href="/exhibitions"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Exhibitions
        </a>
        <a
          href="/contact"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contact
        </a>
      </nav>

      <button
        className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        id="gooey-btn"
        className="hidden md:flex relative items-center group"
        style={{ filter: "url(#gooey-filter)" }}
      >
        <a
          href={MAATRIKA_URL || "#"}
          target={MAATRIKA_URL ? "_blank" : undefined}
          rel={MAATRIKA_URL ? "noopener noreferrer" : undefined}
          className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-32 z-0"
          aria-label="Visit Maatrika Art"
          title="Visit Maatrika Art"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </a>
        <a
          href={MAATRIKA_URL || "#"}
          target={MAATRIKA_URL ? "_blank" : undefined}
          rel={MAATRIKA_URL ? "noopener noreferrer" : undefined}
          className="px-5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10 whitespace-nowrap"
          aria-label="Visit Maatrika Art"
        >
          Visit Maatrika Art
        </a>
      </div>

      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[10000] md:hidden pointer-events-auto">
            <div
              className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-amber-500/20 backdrop-blur-md"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div
              className="absolute top-0 right-0 h-full w-4/5 max-w-xs text-white p-6 flex flex-col
                         bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl
                         border border-white/20 shadow-2xl"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="self-end mb-6 inline-flex h-9 w-9 items-center justify-center rounded-md text-white/90 hover:text-white hover:bg-white/20 transition"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>

              <nav className="flex flex-col gap-2">
                <a
                  href="/gallery"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                >
                  Gallery
                </a>
                <a
                  href="/exhibitions"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                >
                  Exhibitions
                </a>
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </nav>

              <div className="mt-6">
                <a
                  href={MAATRIKA_URL || "#"}
                  target={MAATRIKA_URL ? "_blank" : undefined}
                  rel={MAATRIKA_URL ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
                  aria-label="Visit Maatrika Art"
                >
                  Visit Maatrika Art
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
