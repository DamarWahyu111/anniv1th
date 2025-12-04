"use client"

import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"

export function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)

  const handleOpenEnvelope = () => {
    setIsOpen(true)
    // Delay letter reveal for envelope animation
    setTimeout(() => setIsRevealed(true), 600)
  }

  const handleClose = () => {
    setIsRevealed(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section header */}
        <div className="mb-10 md:mb-16">
          <span className="text-xs md:text-sm text-primary tracking-widest uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Special Message
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-3">Surat Cinta Untukmu</h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">Ada sesuatu yang ingin aku sampaikan sayangg</p>
        </div>

        {/* Envelope container */}
        {!isOpen ? (
          <div
            className="relative cursor-pointer group mx-auto"
            onClick={handleOpenEnvelope}
            style={{ perspective: "1000px" }}
          >
            {/* Envelope */}
            <div className="relative w-72 sm:w-80 md:w-96 h-48 sm:h-56 md:h-64 mx-auto">
              {/* Envelope body */}
              <div className="absolute inset-0 bg-gradient-to-b from-rose-100 to-rose-200 rounded-lg shadow-xl border border-rose-200/50 overflow-hidden">
                {/* Envelope pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
                </div>

                {/* Heart seal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" fill="white" />
                    </div>
                    {/* Pulse animation */}
                    <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-30" />
                  </div>
                </div>
              </div>

              {/* Envelope flap (top triangle) */}
              <div
                className="absolute top-0 left-0 w-full h-1/2 origin-top transition-transform duration-500 group-hover:rotate-x-12"
                style={{ transformStyle: "preserve-3d" }}
              >
                <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-md">
                  <path d="M0,0 L200,150 L400,0 L400,0 L0,0 Z" className="fill-rose-300" />
                  <path d="M0,0 L200,150 L400,0" className="stroke-rose-400/50 fill-none" strokeWidth="2" />
                </svg>
              </div>

              {/* Side triangles decoration */}
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M0,200 L0,50 L200,200 Z" className="fill-rose-200/50" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M200,200 L200,50 L0,200 Z" className="fill-rose-200/50" />
                </svg>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-primary animate-bounce">
                <span className="text-sm md:text-base font-medium">Klik untuk membuka</span>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-4 h-4 text-primary/60"
                    fill="currentColor"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating hearts around envelope */}
            <div className="absolute -top-4 -left-4 animate-float">
              <Heart className="w-6 h-6 text-primary/30" fill="currentColor" />
            </div>
            <div className="absolute -top-2 -right-6 animate-float" style={{ animationDelay: "0.5s" }}>
              <Heart className="w-4 h-4 text-primary/40" fill="currentColor" />
            </div>
            <div className="absolute -bottom-2 -left-8 animate-float" style={{ animationDelay: "1s" }}>
              <Heart className="w-5 h-5 text-primary/30" fill="currentColor" />
            </div>
            <div className="absolute -bottom-4 -right-4 animate-float" style={{ animationDelay: "1.5s" }}>
              <Heart className="w-6 h-6 text-primary/40" fill="currentColor" />
            </div>
          </div>
        ) : (
          /* Opened letter modal */
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          >
            {/* Letter content */}
            <div
              className={`relative max-w-2xl w-full transition-all duration-700 ${
                isRevealed ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-8"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Paper texture background */}
              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-lg shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')]" />

                {/* Decorative corner */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-8 h-8 text-rose-300" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Heart className="w-6 h-6 text-rose-300" fill="currentColor" />
                </div>

                {/* Letter content */}
                <div className="relative z-10 space-y-4 md:space-y-6 text-stone-700 font-serif">
                  <div className="text-right text-sm text-stone-500 italic">2 Desember 2024</div>

                  <p className="text-lg md:text-xl">Sayang,</p>

                  <p className="leading-relaxed text-sm md:text-base">
                    Satu tahun sudah kita lalui bersama. Dari hari pertama kita ketemu sampai hari ini, setiap
                    momennya terasa begitu berharga. Terima kasih sudah mau menerima aku apa adanya, dengan segala
                    kekurangan dan kelebihanku.
                  </p>

                  <p className="leading-relaxed text-sm md:text-base">
                    Terima kasih untuk setiap tawa, setiap pelukan, dan bahkan setiap pertengkaran kecil yang justru
                    membuat kita semakin mengerti satu sama lain. Kamu adalah alasan di balik senyum terbaikku.
                  </p>

                  <p className="leading-relaxed text-sm md:text-base">
                    Aku berharap ini baru awal dari perjalanan panjang kita. Semoga kita bisa terus bersama, merayakan
                    lebih banyak anniversary di tahun-tahun yang akan datang.
                  </p>

                  <p className="text-lg md:text-xl text-rose-500 font-medium text-center py-4">
                    I love you more than words can say
                  </p>

                  <div className="text-right pt-4">
                    <p className="text-stone-600">Dengan segenap cinta,</p>
                    <p className="text-xl md:text-2xl font-medium text-rose-500 mt-2">Aku Damar</p>
                  </div>

                  {/* Hearts decoration */}
                  <div className="flex justify-center gap-2 pt-4">
                    <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
                    <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
                    <Heart className="w-4 h-4 text-rose-400" fill="currentColor" />
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 left-3 w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 flex items-center justify-center transition-colors text-stone-600"
                >
                  <span className="text-lg">&times;</span>
                </button>
              </div>

              {/* Tap to close hint */}
              <p className="text-center text-white/70 text-sm mt-4">Klik di luar surat untuk menutup</p>
            </div>
          </div>
        )}

        {/* Anniversary badge - always visible */}
        {!isOpen && (
          <div className="mt-12 md:mt-16 inline-flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-rose-200/50 border border-primary/30 shadow-lg">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" fill="currentColor" />
            <span className="text-sm md:text-base text-primary font-medium">Happy 1st Anniversary!</span>
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse" fill="currentColor" />
          </div>
        )}
      </div>
    </section>
  )
}
