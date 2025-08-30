"use client";

export default function HeroContent() {
  const IG_URL = process.env.NEXT_PUBLIC_IG_URL;
  const FB_URL = process.env.NEXT_PUBLIC_FB_URL;
  const YT_URL = process.env.NEXT_PUBLIC_YT_URL;
  const EMAIL_URL = process.env.NEXT_PUBLIC_EMAIL_URL;
  const CONTACT_NUMBER = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">
            ✨ Welcome to World of Prakash Papnai
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">Prakash Papnai</span>
          <br />
        </h1>
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Here, colors are not just painted—they breathe. Every canvas is a
          journey into silence, nature, and the infinite dialogue of duality and
          oneness.
        </p>
        <span className="font-light tracking-tight mb-4 text-white">
          Step in, pause for a moment, and let the art speak to your soul.
        </span>

        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            {IG_URL ? (
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
            ) : null}
            {FB_URL ? (
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90">
                  <path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                </svg>
              </a>
            ) : null}
            {YT_URL ? (
              <a
                href={YT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
                title="YouTube"
              >
                {/* YouTube Icon */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90">
                  <path d="M23.5 6.2a3.1 3.1 0 0 0-2.18-2.19C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.32.51A3.1 3.1 0 0 0 .5 6.2 32.2 32.2 0 0 0 0 12a32.2 32.2 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.18 2.19C4.5 20.5 12 20.5 12 20.5s7.5 0 9.32-.51a3.1 3.1 0 0 0 2.18-2.19A32.2 32.2 0 0 0 24 12a32.2 32.2 0 0 0-.5-5.8ZM9.75 15.02v-6l6 3-6 3Z" />
                </svg>
              </a>
            ) : null}
            {EMAIL_URL ? (
              <a
                href={EMAIL_URL}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/15 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
                title="Email"
              >
                {/* Mail Icon */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                  <path d="m22 8-10 6L2 8" />
                </svg>
              </a>
            ) : null}
            
          </div>

          {/* Keep existing CTA */}
          <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
