export default function YarnDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top-left yarn ball */}
      <svg
        className="absolute -left-16 -top-16 h-64 w-64 text-sand opacity-70"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M40 80 Q100 40 160 80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 3"
        />
        <path
          d="M28 110 Q100 60 172 110"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
        />
        <path
          d="M36 140 Q100 90 164 140"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
        />
        <path
          d="M180 110 Q210 90 230 60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Bottom-right yarn ball */}
      <svg
        className="absolute -bottom-20 -right-20 h-72 w-72 text-blush opacity-60"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M40 120 Q100 160 160 120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 3"
        />
        <path
          d="M28 90 Q100 140 172 90"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 3"
        />
        <path
          d="M20 110 Q-10 130 -30 160"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Top-right crochet hook silhouette */}
      <svg
        className="absolute right-8 top-8 h-32 w-10 text-terracotta opacity-20"
        viewBox="0 0 40 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="18" y="0" width="5" height="90" rx="2.5" fill="currentColor" />
        <path
          d="M23 90 Q30 100 28 112 Q26 120 20 120 Q14 120 12 112 Q10 100 17 90"
          fill="currentColor"
        />
        <ellipse cx="20" cy="88" rx="6" ry="4" fill="currentColor" />
      </svg>

      {/* Bottom-left crochet hook */}
      <svg
        className="absolute bottom-12 left-10 h-28 w-9 text-sage opacity-25 rotate-12"
        viewBox="0 0 40 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="18" y="0" width="5" height="90" rx="2.5" fill="currentColor" />
        <path
          d="M23 90 Q30 100 28 112 Q26 120 20 120 Q14 120 12 112 Q10 100 17 90"
          fill="currentColor"
        />
        <ellipse cx="20" cy="88" rx="6" ry="4" fill="currentColor" />
      </svg>

      {/* Scattered stitch dots */}
      <div className="absolute left-1/4 top-8 h-2 w-2 rounded-full bg-blush opacity-40" />
      <div className="absolute left-1/3 top-16 h-1.5 w-1.5 rounded-full bg-sand opacity-50" />
      <div className="absolute right-1/4 top-12 h-2 w-2 rounded-full bg-terracotta opacity-20" />
      <div className="absolute right-1/3 bottom-20 h-2 w-2 rounded-full bg-sage opacity-30" />
      <div className="absolute left-1/5 bottom-16 h-1.5 w-1.5 rounded-full bg-blush opacity-40" />
    </div>
  )
}
