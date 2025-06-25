import Link from "next/link"

export default function ScatterbrainHero() {
  return (
    <section className="bg-black text-white px-4 py-8 sm:py-12">
      <div className="max-w-screen-md mx-auto text-center flex flex-col items-center justify-center">
        {/* Brain Image */}
        <img
          src="/brain.png"
          alt="Scatterbrain Brain Logo"
          className="w-full max-w-[240px] sm:max-w-[320px] md:max-w-[400px] -mt-4 sm:-mt-0 mb-4"
        />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">SCATTERBRAIN</h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl font-semibold mb-2">Your thoughts, organized.</p>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-gray-300 mb-4 px-2 sm:px-6">
          Capture anything, anywhere. Scatterbrain turns it into something real.
        </p>

        {/* CTA Button */}
        <Link
          href="/waitlist"
          className="mt-2 inline-block rounded-full bg-white text-black text-sm sm:text-base font-semibold px-6 py-3 hover:bg-gray-100 transition"
        >
          Start Using Your Brain
        </Link>
      </div>
    </section>
  )
}
