"use client"

import { useEffect, useState } from "react"

interface Confetti {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  color: string
  delay: number
  duration: number
}

export function ConfettiOverlay() {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const colors = ["bg-primary/40", "bg-accent/40", "bg-rose-300/40", "bg-pink-300/40", "bg-red-300/40"]

    const newConfetti: Confetti[] = []
    for (let i = 0; i < 30; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        scale: 0.3 + Math.random() * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 5,
      })
    }
    setConfetti(newConfetti)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confetti.map((item) => (
        <div
          key={item.id}
          className={`absolute w-2 h-3 ${item.color} rounded-sm animate-confetti-fall`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
