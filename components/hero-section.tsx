import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center min-h-screen px-4 pb-12">
      {/* Glowing Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="bg-gradient-radial from-[#ff89d0]/20 to-transparent blur-3xl w-[600px] h-[600px] rounded-full" />
      </div>

      {/* Hero Image */}
      <div className="relative z-10 w-full max-w-[500px] mb-6 py-[-7px]">
        <img
          src="/scatterbrain-hero-brain-trans.png"
          alt="Scatterbrain Neural Brain"
          className="w-full mix-blend-multiply drop-shadow-2xl"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight px-0 my-[-10px]">SCATTERBRAIN</h1>
        <p className="text-lg md:text-xl text-white/80 font-medium">Your thoughts, organized.</p>
        <p className="max-w-md mx-auto text-sm text-white/60 my-[-10px] mb-[-24px]">
          Capture anything, anywhere. Scatterbrain turns it into something real.
        </p>

        {/* CTA Button */}
        <div className="mt-8 animate-fade-in">
          <Link
            href="#waitlist"
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition"
          >
            Start Using Your Brain
          </Link>
        </div>
      </div>

      {/* Scroll Anchor */}
      <div id="waitlist" className="absolute bottom-4" />
    </section>
  )
}
