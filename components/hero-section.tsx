"use client"

import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { FloatingHearts } from "./floating-hearts"
import { ConfettiOverlay } from "./confetti-overlay"
import { DecorativeOrnaments } from "./decorative-ornaments"

export function HeroSection() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const startDate = new Date("2024-12-02")
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - startDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDays(diffDays)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/30 to-red-50/50 animate-gradient" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 md:w-48 h-32 md:h-48 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-40 md:w-64 h-40 md:h-64 rounded-full bg-accent/10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-48 md:w-72 h-48 md:h-72 rounded-full bg-rose-200/10 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <FloatingHearts />

      <ConfettiOverlay />

      <DecorativeOrnaments />

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-card/80 backdrop-blur-md border-2 border-primary/20 mb-6 md:mb-8 animate-fade-in-up shadow-lg">
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" fill="currentColor" />
          <span className="text-xs md:text-sm text-muted-foreground tracking-wider font-medium">
            2 DES 2024 - 2 DES 2025
          </span>
          <Heart
            className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse"
            fill="currentColor"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Main title */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 md:mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block text-foreground">Happy</span>
          <span className="block text-primary italic font-medium bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            1st Anniversary
          </span>
        </h1>

        {/* Couple names */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-6 md:mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Untuk Kamu yang Tercinta
        </p>

        <div
          className="inline-flex flex-col items-center gap-2 md:gap-3 px-8 md:px-12 py-6 md:py-8 rounded-2xl bg-card/90 backdrop-blur-md border-2 border-primary/20 animate-fade-in-up shadow-2xl relative"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

          <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary animate-pulse">{days}</span>
          <span className="text-xs md:text-sm text-muted-foreground tracking-widest uppercase">Hari Bersama</span>

          {/* Small hearts decoration */}
          <div className="flex gap-1 mt-2">
            <Heart className="w-3 h-3 text-primary/60 animate-pulse" fill="currentColor" />
            <Heart
              className="w-3 h-3 text-primary/60 animate-pulse"
              fill="currentColor"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="w-3 h-3 text-primary/60 animate-pulse"
              fill="currentColor"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
