"use client"

import { useEffect, useState, useCallback } from "react"

interface CursorHeart {
  id: number
  x: number
  y: number
  createdAt: number
}

export function LoveCursor() {
  const [hearts, setHearts] = useState<CursorHeart[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Only create heart every few pixels moved
    if (Math.random() > 0.92) {
      const newHeart: CursorHeart = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        createdAt: Date.now(),
      }
      setHearts((prev) => [...prev.slice(-15), newHeart])
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup old hearts
    const interval = setInterval(() => {
      const now = Date.now()
      setHearts((prev) => prev.filter((h) => now - h.createdAt < 1500))
    }, 100)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(interval)
    }
  }, [isClient, handleMouseMove])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-cursor-heart"
          style={{
            left: heart.x,
            top: heart.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-primary/60">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
