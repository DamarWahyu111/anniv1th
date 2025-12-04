"use client"

import { Heart, Calendar, Star, Camera, Music, Plane } from "lucide-react"

const milestones = [
  {
    date: "2 Desember 2024",
    title: "Hari Pertama Kita",
    description: "Awal dari segalanya, hari di mana kita memulai dari sebuah chat.",
    icon: Heart,
  },
  {
    date: "Desember 2024",
    title: "Bulan Pertama",
    description: "Masih malu-malu, tapi seneng banget bisa jadi milikmu",
    icon: Star,
  },
  {
    date: "2025",
    title: "Momen-momen Bareng",
    description: "Coffee date, nonton, jalan-jalan... semua terasa spesial karena ada kamu",
    icon: Camera,
  },
  {
    date: "2025",
    title: "Suka Duka Bersama",
    description: "Ada tawa, ada tangis, ada berantem juga. Tapi kita selalu kembali satu sama lain",
    icon: Music,
  },
  {
    date: "2025",
    title: "Petualangan Kita",
    description: "Tempat-tempat baru yang kita eksplor berdua, bikin memories yang gak akan pernah lupa",
    icon: Plane,
  },
  {
    date: "2 Desember 2025",
    title: "1 Tahun Bersama!",
    description: "Hari ini! Terima kasih sudah bertahan, sudah sabar, sudah jadi yang terbaik. I love you!",
    icon: Calendar,
  },
]

export function LoveTimeline() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-xs md:text-sm text-primary tracking-widest uppercase">Our Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-2 mb-3 md:mb-4">Perjalanan Cinta Kita</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            Dari 2 Desember 2024 sampai sekarang dan selamanya
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:-translate-x-1/2" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={cn(
                  "relative flex items-start gap-4 md:gap-8 mb-8 md:mb-12 last:mb-0",
                  isEven ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shrink-0 shadow-lg shadow-primary/30">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>

                {/* Content card */}
                <div className={cn("ml-16 md:ml-0 md:w-1/2 flex-1", isEven ? "md:pr-12 md:text-right" : "md:pl-12")}>
                  <div className="bg-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    <span className="text-xs text-primary tracking-wider font-medium">{milestone.date}</span>
                    <h3 className="text-lg md:text-xl font-medium mt-1 mb-1.5 md:mb-2 group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side - desktop only */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            )
          })}
        </div>

        {/* Decorative ending */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 text-primary">
            <span className="h-px w-8 bg-primary/50" />
            <Heart className="w-5 h-5 fill-primary animate-pulse" />
            <span className="h-px w-8 bg-primary/50" />
          </div>
          <p
            className="mt-4 text-lg md:text-xl text-muted-foreground"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            ...dan cerita kita masih akan terus berlanjut
          </p>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
