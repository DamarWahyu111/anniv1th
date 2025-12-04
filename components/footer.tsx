import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
          <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" fill="currentColor" />
          <span className="text-xs md:text-sm text-muted-foreground">Made with love</span>
          <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" fill="currentColor" />
        </div>
        <p className="text-[10px] md:text-xs text-muted-foreground">2 Desember 2025 - 2 Desember 2025</p>
        <p className="text-base md:text-lg font-medium text-primary mt-3 md:mt-4 italic">
          {'"'}Forever & Always{'"'}
        </p>
      </div>
    </footer>
  )
}
