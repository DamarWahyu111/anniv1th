"use client"

import { useEffect, useState } from "react"
import { Heart, Calendar, Coffee, MapPin, Camera, Infinity } from "lucide-react"

const stats = [
  { icon: Calendar, label: "Hari Bersama", subtext: "365+ hari" },
  { icon: Heart, label: "Pelukan Hangat", subtext: "Tak terhitung" },
  { icon: Coffee, label: "Coffee Dates", subtext: "Banyak banget!" },
  { icon: MapPin, label: "Tempat Baru", subtext: "Terus bertambah" },
  { icon: Camera, label: "Foto Berdua", subtext: "Penuh galeri" },
  { icon: Infinity, label: "Cinta", subtext: "Tanpa batas" },
]

export function CountingStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("counting-stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="counting-stats"
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-primary/5 via-background to-rose-100/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs md:text-sm text-primary tracking-widest uppercase">Our Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-2 mb-3">Perjalanan Cinta Kita</h2>
          <p className="text-sm md:text-base text-muted-foreground">Hal-hal yang sudah kita lalui bersama</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-2xl p-5 md:p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-primary/20 to-rose-200/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <p className="text-base md:text-lg font-medium text-foreground mb-1">{stat.label}</p>
                <p className="text-lg md:text-xl text-primary" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                  {stat.subtext}
                </p>
              </div>
            )
          })}
        </div>

        {/* Decorative quote */}
        <div className="mt-10 md:mt-14 text-center">
          <p
            className="text-xl md:text-2xl text-muted-foreground italic"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            "Yang penting bukan berapa banyak, tapi betapa berartinya setiap momen bersamamu"
          </p>
        </div>
      </div>
    </section>
  )
}
