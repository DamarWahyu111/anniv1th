export function DecorativeOrnaments() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top left ornament */}
      <div className="absolute -top-10 -left-10 w-40 h-40 md:w-60 md:h-60 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            d="M100,20 Q120,40 100,60 Q80,40 100,20 M100,60 L100,100 M80,80 Q100,90 120,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-pulse"
          />
          <circle cx="100" cy="100" r="5" fill="currentColor" />
        </svg>
      </div>

      {/* Top right ornament */}
      <div className="absolute -top-10 -right-10 w-40 h-40 md:w-60 md:h-60 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-accent">
          <path
            d="M100,20 C120,20 140,40 140,60 C140,80 120,100 100,100 C80,100 60,80 60,60 C60,40 80,20 100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      {/* Bottom decorative lines */}
      <div className="absolute bottom-20 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
      <div
        className="absolute bottom-24 right-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
