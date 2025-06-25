"use client"

import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 pb-10 relative">
      {/* Multi-layered Animated Glowing Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Primary pink glow */}
        <div className="absolute bg-gradient-radial from-[#ff89d0]/25 to-transparent blur-3xl w-[600px] h-[600px] rounded-full animate-glow-float-1" />

        {/* Secondary purple glow */}
        <div className="absolute bg-gradient-radial from-[#a855f7]/20 to-transparent blur-2xl w-[500px] h-[500px] rounded-full animate-glow-float-2" />

        {/* Tertiary blue glow */}
        <div className="absolute bg-gradient-radial from-[#3b82f6]/15 to-transparent blur-3xl w-[450px] h-[450px] rounded-full animate-glow-float-3" />

        {/* Cyan accent glow */}
        <div className="absolute bg-gradient-radial from-[#06b6d4]/18 to-transparent blur-2xl w-[350px] h-[350px] rounded-full animate-glow-float-4" />

        {/* Violet neural glow */}
        <div className="absolute bg-gradient-radial from-[#8b5cf6]/12 to-transparent blur-xl w-[400px] h-[400px] rounded-full animate-glow-float-5" />

        {/* Warm orange accent */}
        <div className="absolute bg-gradient-radial from-[#f97316]/10 to-transparent blur-2xl w-[300px] h-[300px] rounded-full animate-glow-float-6" />
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center text-center relative z-10">
        <Image
          src="/scatterbrain-hero-brain-trans.png"
          alt="Scatterbrain Hero Brain"
          width={350}
          height={350}
          priority
          className="w-[80%] max-w-[320px] h-auto mb-8"
        />

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">SCATTERBRAIN</h1>
        <p className="text-lg font-semibold mb-2">Your thoughts, organized.</p>
        <p className="text-sm text-gray-300 mb-6 sm:mb-8 px-4">
          Capture anything, anywhere. Scatterbrain turns it into something real.
        </p>

        <Link
          href="/waitlist"
          className="inline-block bg-white text-black font-medium text-base px-6 py-3 rounded-full shadow-sm hover:bg-white/90 transition"
        >
          Start Using Your Brain
        </Link>
      </div>

      {/* Footer content (bottom padding ensures it's visible on mobile) */}
      <div className="mt-10 text-xs text-gray-500 text-center relative z-10">
        <p className="mb-2">MIT © 2025 Aaron Greenberg / Dreamberg Labs</p>
        <p>
          Built in public by{" "}
          <a
            href="https://twitter.com/dreamberglabs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            @dreamberglabs
          </a>
        </p>
      </div>
    </section>
  )
}
