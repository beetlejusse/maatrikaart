"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function PulsingCircle() {
  const MAATRIKA_URL = process.env.NEXT_PUBLIC_MAATRIKA_ART_URL

  return (
    <div className="absolute bottom-8 right-8 z-30">
      <a
        href={MAATRIKA_URL || "/gallery"}
        target={MAATRIKA_URL ? "_blank" : undefined}
        rel={MAATRIKA_URL ? "noopener noreferrer" : undefined}
        aria-label="Explore art by Prakash Papnai"
        title="Explore Art"
        className="group block"
      >
        <div className="relative w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          {/* Pulsing Border Circle themed to app colors */}
          <PulsingBorder
            colors={["#8b5cf6", "#ffffff", "#4c1d95", "#1e1b4b"]}
            colorBack="#00000000"
            speed={1.2}
            roundness={1}
            thickness={0.12}
            softness={0.25}
            intensity={4}
            pulse={0.12}
            smoke={0.45}
            smokeSize={4}
            scale={0.68}
            rotation={0}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />

          {/* Rotating Artist Text */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-white/80 instrument">
              <textPath href="#circle" startOffset="0%">
                Prakash Papnai • Artist • Explore Art • Prakash Papnai • Artist • Explore Art •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </a>
    </div>
  )
}
