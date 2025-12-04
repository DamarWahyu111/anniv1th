"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface RainHeart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  sway: number
}

export function HeartRain() {
  const [hearts, setHearts] = useState<RainHeart[]>([])

  useEffect(() => {
    const newHearts: RainHeart[] = []
    for (let i = 0; i < 25; i++) {
      newHearts.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 12,
        size: 8 + Math.random() * 16,
        sway: -20 + Math.random() * 40,
      })
    }
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-rain"
          style={{
            left: `${heart.x}%`,
            top: `-${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            ["--sway" as string]: `${heart.sway}px`,
          }}
        >
          <Heart className="text-primary/20" style={{ width: heart.size, height: heart.size }} fill="currentColor" />
        </div>
      ))}
    </div>
  )
}
