import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Artist() {
  const PORTFOLIO_URL = process.env.NEXT_PUBLIC_PORTFOLIO_URL;
  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="text-green-800 font-medium tracking-wider">
            ABOUT THE ARTIST
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Where practice meets vision,
            <br />a distinct artistic voice emerges.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This portfolio showcases original paintings created with a deep
            respect for craft and materials. Rooted in nature and everyday
            moments, each work balances intuition with structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
              alt="Artist studio with canvases and paints"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Inspired by the living world,
              <br />
              expressed through paint
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The studio practice blends observation with abstraction—colors,
              light, and texture become subjects in themselves. Recurring themes
              include landscapes, still life, and quiet portraits.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Works are crafted with archival pigments and surfaces to ensure
              longevity. The goal is simple: create pieces that feel at home and
              grow richer over time.
            </p>
            <div
              id="gooey-btn"
              className="relative inline-flex items-center group"
              style={{ filter: "url(#gooey-filter)" }}
            >
              <a
                href={PORTFOLIO_URL || "#"}
                target={PORTFOLIO_URL ? "_blank" : undefined}
                rel={PORTFOLIO_URL ? "noopener noreferrer" : undefined}
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 -translate-x-10 group-hover:translate-x-8 h-10 w-10 md:h-11 md:w-11 rounded-full bg-primary text-white font-normal text-xs transition-all duration-300 shadow ring-1 ring-white/40 flex items-center justify-center z-20"
                aria-hidden="true"
                tabIndex={-1}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
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
                href={PORTFOLIO_URL || "#"}
                target={PORTFOLIO_URL ? "_blank" : undefined}
                rel={PORTFOLIO_URL ? "noopener noreferrer" : undefined}
                className="px-6 md:px-7 h-12 md:h-12 min-w-[220px] rounded-full bg-primary text-white font-medium text-sm md:text-base transition-all duration-300 hover:bg-primary shadow-sm flex items-center justify-center z-30"
              >
                Visit Prakash Papnai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
