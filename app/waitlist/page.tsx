"use client"

import { useState } from "react"
import Link from "next/link"

export default function WaitlistPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight mb-6">You're on the list!</h1>

        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Thanks for joining the waitlist. We'll email you when Scatterbrain is ready, plus occasionally share something
          worth your time.
        </p>

        <Link
          href="/"
          className="bg-white text-black text-lg font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Back to Home
        </Link>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight mb-6">Get Early Access</h1>

      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Join the waitlist to be the first to use Scatterbrain. We'll email you when it's ready — and occasionally with
        something worth your time.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setIsSubmitting(true)

          const form = new FormData(e.target as HTMLFormElement)
          const email = form.get("email")
          const use_case = form.get("use_case")

          try {
            const res = await fetch("https://api.convertkit.com/v3/forms/8228004/subscribe", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                api_key: "b09wOpw_ycO_S6U6idmC0w",
                email,
                tags: [use_case],
              }),
            })

            const data = await res.json()
            if (data.subscription) {
              setIsSubmitted(true)
              ;(e.target as HTMLFormElement).reset()
            } else {
              alert("⚠️ Something went wrong. Please try again.")
            }
          } catch (error) {
            alert("⚠️ Something went wrong. Please try again.")
          } finally {
            setIsSubmitting(false)
          }
        }}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          disabled={isSubmitting}
          className="px-5 py-3 rounded-full text-black placeholder-gray-500 disabled:opacity-50"
        />

        <div className="relative">
          <select
            name="use_case"
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-full text-black bg-white appearance-none cursor-pointer disabled:opacity-50"
          >
            <option value="">What are you hoping to use this for?</option>
            <option value="Content Creation">Content creation</option>
            <option value="Startup Ideas">Startup ideas</option>
            <option value="Writing">Essays or writing</option>
            <option value="Organizing Thoughts">Thinking clearly / organizing thoughts</option>
            <option value="Other">Something else</option>
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-white text-black text-lg font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Joining..." : "Join the Waitlist"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 max-w-xs">
        We'll never spam you or sell your data. Just smart linking for big thinking.
      </p>

      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
        <p className="text-gray-400 text-sm mb-4">Follow the build in public:</p>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/dreamberg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>@dreamberg</span>
          </a>
          <a
            href="https://github.com/ronnydonkey/scatterbrain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <Link href="/" className="text-gray-400 hover:text-white transition mt-8 underline">
        ← Back to Home
      </Link>
    </section>
  )
}
