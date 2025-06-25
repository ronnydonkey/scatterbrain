export default function ScatterbrainHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <img
        src="/scatterbrain-hero-brain.jpg"
        alt="Neural Scatterbrain Brain"
        className="w-96 mb-8 rounded-xl shadow-xl"
      />

      <p className="text-6xl md:text-7xl font-black text-white uppercase tracking-wide mb-8">SCATTERBRAIN</p>

      <h1 className="text-3xl md:text-4xl font-bold max-w-2xl leading-tight mb-4">Your thoughts, organized.</h1>

      <p className="text-lg text-gray-300 max-w-xl">
        Capture anything, anywhere. Scatterbrain turns it into something real.
      </p>

      <a
        href="#waitlist"
        className="mt-8 inline-block bg-white text-black text-lg font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        Start Using Your Brain
      </a>
    </section>
  )
}
