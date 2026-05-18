import Image from 'next/image'
import CountdownTimer from './_components/coming-soon/CountdownTimer'
import EmailSignupForm from './_components/coming-soon/EmailSignupForm'
import YarnDecoration from './_components/coming-soon/YarnDecoration'
import FeatureHighlights from './_components/coming-soon/FeatureHighlights'

const LAUNCH_DATE = '2026-10-01T00:00:00'

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-cream">
      <YarnDecoration />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        {/* Brand */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-sand shadow-md">
            <Image
              src="/mekoko.jpg"
              alt="Mekoko logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-6xl font-bold tracking-widest text-terracotta lowercase">
            mekoko
          </h1>
          <p className="text-xs font-semibold tracking-[0.3em] text-warm-dark/40 uppercase">
            Handcrafted Crochet
          </p>
        </div>

        {/* Headline */}
        <h2 className="mb-3 max-w-sm text-2xl font-semibold text-warm-dark leading-snug">
          Something beautiful is being stitched together
        </h2>
        <p className="mb-12 max-w-xs text-sm text-warm-dark/60 leading-relaxed">
          We&apos;re weaving the final threads. Sign up to be the first to shop
          when we launch.
        </p>

        {/* Countdown */}
        <CountdownTimer launchDate={LAUNCH_DATE} />

        {/* Email capture */}
        <div className="mt-12 w-full max-w-sm">
          <p className="mb-3 text-xs font-semibold tracking-widest text-warm-dark/50 uppercase">
            Join the waitlist
          </p>
          <EmailSignupForm />
        </div>

        {/* Feature sneak peek */}
        <FeatureHighlights />
      </div>

      <footer className="relative z-10 pb-6 text-center text-xs text-warm-dark/30">
        &copy; {new Date().getFullYear()} Mekoko. Made with yarn &amp; love.
      </footer>
    </main>
  )
}
