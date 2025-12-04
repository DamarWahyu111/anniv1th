import { HeroSection } from "@/components/hero-section"
import { PolaroidGallery } from "@/components/polaroid-gallery"
import { CountingStats } from "@/components/counting-stats"
import { LoveTimeline } from "@/components/love-timeline"
import { ReasonsCarousel } from "@/components/reasons-carousel"
import { LoveLetterSection } from "@/components/love-letter-section"
import { Footer } from "@/components/footer"
import { MusicPlayer } from "@/components/music-player"
import { HeartRain } from "@/components/heart-rain"
import { LoveCursor } from "@/components/love-cursor"
import { LoveBubble } from "@/components/love-bubble"
import { SpecialAlbum } from "@/components/special-album"

export default function AnniversaryPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <HeartRain />
      <LoveBubble />
      <LoveCursor />

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <PolaroidGallery />
        <SpecialAlbum />
        <CountingStats />
        <LoveTimeline />
        <ReasonsCarousel />
        <LoveLetterSection />
        <Footer />
      </div>

      <MusicPlayer />
    </main>
  )
}
