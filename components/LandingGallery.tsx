"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const paintings = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg",
    alt: "Abstract painting with warm colors",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg",
    alt: "Vibrant abstract artwork",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg",
    alt: "Modern art piece with fluid shapes",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg",
    alt: "Textured painting with earthy tones",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg",
    alt: "Colorful abstract composition",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg",
    alt: "Minimalist painting with gold leaf",
  },
];

const LandingGallery = () => {
  return (
    <section
            id="gallery"
            className="py-24 sm:py-40 backdrop-blur-sm w-full"
          >
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-rose-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                Our Artistic Collection
              </motion.h2>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {paintings.map((painting, index) => (
                  <motion.div
                    key={painting.id}
                    className="group relative overflow-hidden rounded-xl shadow-md break-inside-avoid"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Image
                      src={painting.src}
                      alt={painting.alt}
                      width={600}
                      height={800}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default LandingGallery
