"use client";

import Link from "next/link";

export default function Header() {
  const MAATRIKA_URL = process.env.NEXT_PUBLIC_MAATRIKA_ART_URL;

  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <Link href="/">
        <div className="flex items-center">
          <span className="translate-x-[-0.5px] text-white text-base lg:text-lg font-medium tracking-wide">
            Prakash Papnai
          </span>
        </div>
      </Link>

      <nav className="flex items-center space-x-2">
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

      <div
        id="gooey-btn"
        className="relative flex items-center group"
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
    </header>
  );
}
