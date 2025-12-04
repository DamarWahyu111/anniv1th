"use client"

import { useState } from "react"
import { Heart, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const specialPhotos = [
  { id: 1, src: "/img/PICT1.JPEG", caption: "Senyummu yang paling aku suka" },
  { id: 2, src: "/img/PICT2.JPEG", caption: "Cantik banget di sini" },
  { id: 3, src: "/img/PICT3.JPEG", caption: "Ketawa kamu bikin aku ikut senang" },
  { id: 4, src: "/img/PICT4.JPEG", caption: "Matamu selalu berbinar" },
  { id: 5, src: "/img/PICT5.JPEG", caption: "Manis banget" },
  { id: 6, src: "/img/PICT6.JPEG", caption: "Pose favorit aku" },
  { id: 7, src: "/img/PICT7.JPEG", caption: "Tetap cantik walau candid" },
  { id: 8, src: "/img/PICT8.JPEG", caption: "Aku suka liatin kamu" },
  { id: 9, src: "/img/PICT9.JPEG", caption: "Wajah yang selalu aku rindukan" },
  { id: 10, src: "/img/PICT10.JPEG", caption: "Love you so much" },
  { id: 11, src: "/img/PICT11.JPEG", caption: "My favorite person" },
  { id: 13, src: "/img/PICT12.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 14, src: "/img/PICT13.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 15, src: "/img/PICT14.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 16, src: "/img/PICT15.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 17, src: "/img/PICT16.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 18, src: "/img/PICT17.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 19, src: "/img/PICT18.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 20, src: "/img/PICT19.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 21, src: "/img/PICT20.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 22, src: "/img/PICT21.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 23, src: "/img/PICT22.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 24, src: "/img/PICT23.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 25, src: "/img/PICT24.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 26, src: "/img/PICT25.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 27, src: "/img/PICT26.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 28, src: "/img/PICT27.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 29, src: "/img/PICT28.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 30, src: "/img/PICT29.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 31, src: "/img/PICT30.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
  { id: 31, src: "/img/PICT31.JPEG", caption: "Kamu segalanya!!!!!!!!!!!!!!!!" },
]

const scrollingPhotos = [...specialPhotos, ...specialPhotos]

export function SpecialAlbum() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState<number | null>(null)

  const openPhoto = (index: number) => setSelectedIndex(index)
  const closePhoto = () => setSelectedIndex(null)

  const nextPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % specialPhotos.length)
    }
  }

  const prevPhoto = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + specialPhotos.length) % specialPhotos.length)
    }
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-rose-200 animate-pulse">
        <Heart className="w-8 h-8 md:w-12 md:h-12 fill-current" />
      </div>
      <div className="absolute top-20 right-16 text-pink-200 animate-bounce">
        <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="absolute bottom-20 left-20 text-rose-200 animate-pulse" style={{ animationDelay: "0.3s" }}>
        <Heart className="w-6 h-6 md:w-10 md:h-10 fill-current" />
      </div>
      <div className="absolute bottom-32 right-10 text-pink-200 animate-bounce" style={{ animationDelay: "0.5s" }}>
        <Sparkles className="w-5 h-5 md:w-7 md:h-7" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-400 fill-rose-400 animate-pulse" />
            <span className="text-rose-400 text-xs md:text-sm tracking-widest uppercase font-medium">
              Special For You
            </span>
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-400 fill-rose-400 animate-pulse" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-rose-900 mb-3 md:mb-4">Album Kamu</h2>
          <p className="text-rose-600/70 text-sm md:text-base max-w-md mx-auto">
            Koleksi foto-foto kamu yang paling aku suka. Setiap foto punya cerita tersendiri.
          </p>
        </div>

        {/* Baris foto jalan otomatis */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-3 md:gap-4 w-max"
            style={{ animation: "marquee 15s linear infinite" }} // ⬅️ ANIMASI DI SINI
          >
            {scrollingPhotos.map((photo, index) => {
              const originalIndex = index % specialPhotos.length

              return (
                <div
                  key={`${photo.id}-${index}`}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setIsHovered(originalIndex)}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => openPhoto(originalIndex)}
                >
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl
                      bg-white p-2 shadow-lg
                      transform transition-all duration-500 ease-out
                      ${isHovered === originalIndex ? "scale-105 shadow-xl shadow-rose-200/50 -rotate-1" : "hover:shadow-rose-100"}
                      ${originalIndex % 3 === 0 ? "rotate-1" : originalIndex % 3 === 1 ? "-rotate-1" : "rotate-0"}
                    `}
                  >
                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden">
                      <img
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className={`
                          absolute inset-0 bg-gradient-to-t from-rose-500/80 via-rose-400/40 to-transparent
                          flex flex-col items-center justify-end p-3 md:p-4
                          transition-opacity duration-300
                          ${isHovered === originalIndex ? "opacity-100" : "opacity-0"}
                        `}
                      >
                        <Heart className="w-6 h-6 md:w-8 md:h-8 text-white fill-white mb-2 animate-pulse" />
                        <p className="text-white text-xs md:text-sm text-center font-medium line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`
                        absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6
                        bg-rose-400 rounded-full flex items-center justify-center
                        transform transition-all duration-300
                        ${isHovered === originalIndex ? "scale-110 rotate-12" : "scale-100"}
                      `}
                    >
                      <Heart className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-2 mt-10 md:mt-14">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-rose-300" />
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-400 fill-rose-400" />
          <span className="text-rose-400 text-xs md:text-sm italic">kamu cantik banget</span>
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-400 fill-rose-400" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-rose-300" />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closePhoto}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50" onClick={closePhoto}>
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-50"
            onClick={(e) => {
              e.stopPropagation()
              prevPhoto()
            }}
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-50"
            onClick={(e) => {
              e.stopPropagation()
              nextPhoto()
            }}
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-2xl">
              <img
                src={specialPhotos[selectedIndex].src || "/placeholder.svg"}
                alt={specialPhotos[selectedIndex].caption}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              />
              <div className="mt-3 md:mt-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                </div>
                <p className="text-rose-700 font-medium text-sm md:text-base">
                  {specialPhotos[selectedIndex].caption}
                </p>
                <p className="text-rose-400 text-xs mt-1">
                  {selectedIndex + 1} / {specialPhotos.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
