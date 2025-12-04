"use client"

import Image from "next/image"
import { useState } from "react"

const polaroids = [
  { image: "/img/polaroid/pict5.jpeg", caption: "Awal photobooth", rotation: -6 },
  { image: "/img/polaroid/pict4.jpeg", caption: "Margoo", rotation: 4 },
  { image: "/img/polaroid/pict10.jpeg", caption: "Blok M Date", rotation: -3 },
  { image: "/img/polaroid/pict6.jpeg", caption: "Jalan-jalan pagii di UI", rotation: 5 },
  { image: "/img/polaroid/pict1.jpeg", caption: "Flowers moment", rotation: -4 },
  { image: "/img/polaroid/pict2.jpeg", caption: "Photobooth seru", rotation: 3 },
  { image: "/img/polaroid/pict3.jpeg", caption: "Photobooth seru", rotation: -5 },
  { image: "/img/polaroid/pict7.jpeg", caption: "Nyanyi bareng", rotation: 2 },
  { image: "/img/polaroid/pict11.jpeg", caption: "Playtopia Date", rotation: -2 },
  { image: "/img/polaroid/pict12.jpeg", caption: "WISUDA AKUU", rotation: 6 },
  { image: "/img/polaroid/pict13.jpeg", caption: "JOGGING GBK FIRST TIME", rotation: -4 },
  { image: "/img/polaroid/pict14.jpeg", caption: "JALAN-JALAN KE FH", rotation: 3 },
  { image: "/img/polaroid/pict15.jpeg", caption: "CFD DEPOK FIRST TIME AKU", rotation: -3 },
  { image: "/img/polaroid/pict16.jpeg", caption: "OMOOO, KAMU SURPRISE IN AKUU *CRY", rotation: 5 },
  { image: "/img/polaroid/pict17.jpeg", caption: "TERIMA KACII CAYANGGGG💕", rotation: -6 },
  { image: "/img/polaroid/pict18.jpeg", caption: "HADIAH DARI KAMU", rotation: 4 },
  { image: "/img/polaroid/pict19.jpeg", caption: "MAM SEBELUM PULANG", rotation: -2 },
  { image: "/img/polaroid/pict20.jpeg", caption: "HUJAN=HUJAN DATE AOKWOA", rotation: 5 },
  { image: "/img/polaroid/pict21.jpeg", caption: "PHOTOBOOTH PERPUS UI", rotation: -5 },
  { image: "/img/polaroid/pict22.jpeg", caption: "MAM AGAIN", rotation: 3 },
  { image: "/img/polaroid/pict23.jpeg", caption: "RAMEN DATE", rotation: -4 },
  { image: "/img/polaroid/pict24.jpeg", caption: "KAJIAN", rotation: 6 },
  { image: "/img/polaroid/pict8.jpeg", caption: "MIRROR PHOTOO", rotation: -3 },
  { image: "/img/polaroid/pict9.jpeg", caption: "FOREVER US", rotation: 4 },
]

export function PolaroidGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs md:text-sm text-primary tracking-widest uppercase">Snapshots</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-2 mb-3">Polaroid Memories</h2>
          <p className="text-sm md:text-base text-muted-foreground">Momen-momen kecil yang berarti besar</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
          {polaroids.map((polaroid, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transition-all duration-500 hover:z-10"
              style={{
                transform: activeIndex === index ? "rotate(0deg) scale(1.2)" : `rotate(${polaroid.rotation}deg)`,
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Polaroid frame */}
              <div className="bg-white p-1.5 md:p-2 pb-8 md:pb-10 shadow-xl rounded-sm transition-all duration-300 group-hover:shadow-2xl group-hover:bg-rose-50/50">
                {/* Image */}
                <div className="relative w-full aspect-square overflow-hidden bg-stone-100">
                  <Image
                    src={polaroid.image || "/placeholder.svg"}
                    alt={polaroid.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Vintage overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent mix-blend-overlay" />
                </div>

                {/* Caption */}
                <p
                  className="absolute bottom-1.5 md:bottom-2 left-0 right-0 text-center text-[10px] md:text-xs text-stone-600"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  {polaroid.caption}
                </p>
              </div>

              {/* Tape decoration - alternating styles */}
              {index % 4 === 0 && (
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 md:w-8 h-2.5 md:h-3 bg-amber-100/80 rotate-2 shadow-sm" />
              )}
              {index % 4 === 1 && (
                <>
                  <div className="absolute -top-1 left-1 w-5 md:w-6 h-2.5 md:h-3 bg-rose-100/80 -rotate-12 shadow-sm" />
                  <div className="absolute -top-1 right-1 w-5 md:w-6 h-2.5 md:h-3 bg-rose-100/80 rotate-12 shadow-sm" />
                </>
              )}
              {index % 4 === 2 && (
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 md:w-8 h-2.5 md:h-3 bg-pink-100/80 -rotate-1 shadow-sm" />
              )}
              {index % 4 === 3 && (
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 md:w-8 h-2.5 md:h-3 bg-sky-100/80 rotate-3 shadow-sm" />
              )}

              {/* Heart sticker on some polaroids */}
              {index % 5 === 0 && (
                <div className="absolute -bottom-0.5 -right-0.5 text-sm md:text-base animate-pulse">💕</div>
              )}
              {index % 7 === 0 && <div className="absolute -top-3 -left-1 text-sm md:text-base">✨</div>}
            </div>
          ))}
        </div>

        {/* Decorative text */}
        <p
          className="text-center mt-10 md:mt-14 text-xl md:text-2xl text-primary/60"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          ...dan masih banyak lagi kenangan indah bersama kamu
        </p>
      </div>
    </section>
  )
}
