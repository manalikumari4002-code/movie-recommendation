"use client"

interface Movie {
  title: string
  genre: string
  description: string
  rating: string
  whyRecommended: string
  cast: string
  region: string
  language: string
}

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="group h-full bg-card border border-border/60 rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300">
      <div className="p-5 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
            {movie.title}
          </h3>
          <p className="text-sm text-accent font-medium mt-1">{movie.genre}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">Rating:</span>
          <span className="text-sm font-bold bg-accent/20 text-accent px-2 py-1 rounded">{movie.rating}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">{movie.description}</p>

        <div className="pt-2 border-t border-border/40">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Cast:</p>
          <p className="text-sm text-foreground">{movie.cast}</p>
        </div>

        {/* Why Recommended */}
        <div className="pt-2 border-t border-border/40">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Why this pick:</p>
          <p className="text-sm text-foreground">{movie.whyRecommended}</p>
        </div>
      </div>
    </div>
  )
}
