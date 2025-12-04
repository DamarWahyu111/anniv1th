"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

interface Bubble {
  id: number
  x: number
  size: number
  delay: number
  duration: number
}

export function LoveBubble() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const newBubbles: Bubble[] = []
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        x: Math.random() * 100,
        size: 20 + Math.random() * 40,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      })
    }
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-0 animate-bubble-rise"
          style={{
            left: `${bubble.x}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        >
          <div
            className="rounded-full bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
            style={{
              width: bubble.size,
              height: bubble.size,
            }}
          >
            <Heart
              className="text-primary/40"
              style={{ width: bubble.size * 0.4, height: bubble.size * 0.4 }}
              fill="currentColor"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
