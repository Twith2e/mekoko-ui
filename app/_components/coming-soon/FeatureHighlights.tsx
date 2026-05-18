const features = [
  {
    title: 'Bags & Totes',
    description: 'Stylish market bags and accessories',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <line x1="3" x2="21" y1="6" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: 'Custom Orders',
    description: 'Your ideas stitched into reality',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
]

export default function FeatureHighlights() {
  return (
    <section className="mt-16 w-full max-w-2xl">
      <p className="mb-6 text-center text-xs font-semibold tracking-widest text-warm-dark/40 uppercase">
        What&apos;s coming
      </p>
      <div className="grid grid-cols-2 gap-4 sm:max-w-sm sm:mx-auto">
        {features.map(({ title, description, icon }) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-2xl border border-sand/60 bg-white/50 px-3 py-5 text-center backdrop-blur-sm transition-shadow hover:shadow-sm"
          >
            <div className="mb-3 text-terracotta">{icon}</div>
            <h3 className="text-xs font-bold text-warm-dark">{title}</h3>
            <p className="mt-1 text-[10px] leading-snug text-warm-dark/50">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
