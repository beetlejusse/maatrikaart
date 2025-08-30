"use client";

import Image from "next/image";

export default function ArtistImage() {
  return (
    <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
      <div
        className="relative w-[360px] lg:w-[480px] aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-xl"
        style={{ filter: "url(#glass-effect)" }}
      >
        <Image
          src="./pp.jpg"
          alt="Portrait of artist Prakash Papnai"
          fill
          sizes="(min-width: 1024px) 480px, 360px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-black font-medium italic instrument">
            Prakash Papnai
          </span>
          <span className=" text-[10px] px-2 py-0.5 rounded-full bg-white/5 ring-1 ring-white/10 text-black font-medium italic instrument">
            Artist
          </span>
        </div>
      </div>
    </div>
  );
}
