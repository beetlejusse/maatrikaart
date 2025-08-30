import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-[#FAF6F3]">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-primary font-medium tracking-wider text-sm">
                A contemporary portfolio of original paintings
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
              <span className="block">Timeless art, crafted by hand—</span>
              <span className="block text-primary">
                paintings that live with you
              </span>
              <span className="block">and tell your story.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              Explore a curated gallery of original works across multiple series
              and mediums. Each piece is created with archival materials and a
              focus on enduring beauty.
              <span className="block mt-2">
                Discover available artworks, commissions, and exhibitions from
                the studio.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
              >
                View Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbQp5FxeGuiKOmwMpVkqvFO28tXwIY.png"
                alt="Featured painting"
                fill
                className="object-contain transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
