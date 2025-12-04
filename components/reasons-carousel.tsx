"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

const reasons = [
  "Karena senyummu adalah obat terbaik di hari-hari beratku",
  "Karena kamu selalu mendengarkan ceritaku, walau tidak penting",
  "Karena kamu selalu bilang 'hati-hati' sebelum aku pergi",
  "Karena pelukan kamu terasa seperti rumah",
  "Karena kamu tertawa dengan jokes garing-ku",
  "Karena kamu selalu support mimpi-mimpiku",
  "Karena kamu adalah partner terbaik untuk nonton film",
  "Karena kamu cantik pas bangun tidur",
  "Karena kamu adalah kamu, dan itu sudah cukup",
]

export function ReasonsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reasons.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToPrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % reasons.length)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary/40">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs md:text-sm text-primary tracking-widest uppercase">Love Notes</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-2 mb-3">9 Alasan Aku Cinta Kamu</h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Reason card */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 min-h-48 md:min-h-56 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Background heart */}
            <Heart
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 text-primary/5"
              fill="currentColor"
            />

            {/* Number */}
            <span className="text-6xl md:text-8xl font-light text-primary/20 absolute top-4 left-6">
              {currentIndex + 1}
            </span>

            {/* Reason text */}
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-light leading-relaxed relative z-10 max-w-2xl">
              {reasons[currentIndex]}
            </p>

            {/* Heart decoration */}
            <div className="flex gap-1 mt-6">
              <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {reasons.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
