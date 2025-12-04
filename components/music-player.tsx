"use client"

import { useState, useRef } from "react"
import { Play, Pause, Heart, Music } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      {/* Hidden audio element - ganti src dengan lagu kamu */}
      <audio ref={audioRef} loop>
        <source src="/our-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating music player */}
      <div
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 transition-all duration-500 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-full shadow-lg p-2 md:p-3 flex items-center gap-2 md:gap-3">
          {/* Album art / Icon */}
          <div
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-rose-400 flex items-center justify-center ${isPlaying ? "animate-spin-slow" : ""}`}
          >
            <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>

          {/* Song info */}
          <div className="hidden sm:block pr-2">
            <p className="text-xs md:text-sm font-medium text-foreground truncate max-w-24 md:max-w-32">Our Song</p>
            <p className="text-xs text-muted-foreground">Playlist</p>
          </div>

          {/* Play button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors shadow-md"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground ml-0.5" />
            )}
          </button>

          {/* Heart */}
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 text-primary transition-transform ${isPlaying ? "animate-pulse scale-110" : ""}`}
            fill="currentColor"
          />
        </div>
      </div>
    </>
  )
}
