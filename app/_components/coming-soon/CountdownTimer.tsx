'use client'

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeTimeLeft(launchDate: string): TimeLeft {
  const diff = new Date(launchDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

interface CountdownTimerProps {
  launchDate: string
}

export default function CountdownTimer({ launchDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(computeTimeLeft(launchDate))
    const id = setInterval(() => setTimeLeft(computeTimeLeft(launchDate)), 1000)
    return () => clearInterval(id)
  }, [launchDate])

  const units = [
    { label: 'Days', value: timeLeft?.days ?? 0 },
    { label: 'Hours', value: timeLeft?.hours ?? 0 },
    { label: 'Mins', value: timeLeft?.minutes ?? 0 },
    { label: 'Secs', value: timeLeft?.seconds ?? 0 },
  ]

  return (
    <div className="flex gap-3 sm:gap-4" aria-label="Countdown to launch">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex min-w-[68px] flex-col items-center rounded-2xl border border-sand bg-parchment px-4 py-4 shadow-sm"
        >
          <span className="tabular-nums text-4xl font-bold text-terracotta leading-none">
            {timeLeft === null ? '--' : String(value).padStart(2, '0')}
          </span>
          <span className="mt-2 text-[10px] font-semibold tracking-widest text-warm-dark/40 uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
