"use client"

import { Heart, Sparkles, Stars } from "lucide-react"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
  type: "heart" | "sparkle" | "star"
  opacity: number
}

export function FloatingHearts() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < 35; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 15,
        size: 12 + Math.random() * 20,
        type: i % 3 === 0 ? "heart" : i % 3 === 1 ? "sparkle" : "star",
        opacity: 0.15 + Math.random() * 0.25,
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-up"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity,
          }}
        >
          {particle.type === "heart" ? (
            <Heart
              className="text-primary"
              style={{ width: particle.size, height: particle.size }}
              fill="currentColor"
            />
          ) : particle.type === "sparkle" ? (
            <Sparkles className="text-accent" style={{ width: particle.size, height: particle.size }} />
          ) : (
            <Stars className="text-primary/60" style={{ width: particle.size, height: particle.size }} />
          )}
        </div>
      ))}
    </div>
  )
}
