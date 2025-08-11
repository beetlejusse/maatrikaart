"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Facebook, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LandingGallery from "@/components/LandingGallery";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col justify-center items-center">
          <AnimatePresence>
            {isMounted && (
              <motion.div
                className="container mx-auto px-4 my-auto mt-20 text-center py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-wide mb-6 text-rose-800">
                  Maatrika Art
                </motion.h1>
                <motion.p className="max-w-3xl mx-auto text-2xl font-kalam font-semibold md:text-2xl text-amber-800 mb-10 *:leading-relaxed italic tracking-tight">
                  कला का एक अनूठा संगम, <span className="font-bad-script font-light"> where every brushstroke tells a story of emotion and depth.</span>
                </motion.p>
                <motion.div>
                  <Button
                    size="lg"
                    className="bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    asChild
                  >
                    <Link href="gallery">
                      Discover the Collection
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <LandingGallery />
          <footer className="py-10 text-lg ">
            <div className="container mx-auto px-4 font-serif text-center text-amber-800">
              <p className="mb-4">
                &copy; {new Date().getFullYear()} Maatrika Art. All rights
                reserved.
              </p>
              <div className="flex justify-center space-x-6">
                <Link
                  href={process.env.NEXT_PUBLIC_IG_URL || "#"}
                  className="hover:text-rose-800 transition-colors"
                >
                  <Instagram />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_FB_URL || "#"}
                  className="hover:text-rose-800 transition-colors"
                >
                  <Facebook />
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_YT_URL || "#"}
                  className="hover:text-rose-800 transition-colors"
                >
                  <YoutubeIcon />
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}