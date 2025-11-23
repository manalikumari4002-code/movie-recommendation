"use client"

import { useState } from "react"
import MovieRecommendationForm from "@/components/movie-recommendation-form"
import MovieResults from "@/components/movie-results"

interface Movie {
  title: string
  genre: string
  description: string
  rating: string
  whyRecommended: string
  poster: string
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [userMood, setUserMood] = useState("")

  const handleGetRecommendations = (recommendations: Movie[] | null) => {
    if (recommendations && recommendations.length > 0) {
      setMovies(recommendations)
    } else {
      setMovies([])
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-lg font-bold text-accent-foreground">🎬</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">CineMatch</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Movie Recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Form Section */}
        <div className="mb-12">
          <MovieRecommendationForm onSubmit={handleGetRecommendations} loading={loading} setLoading={setLoading} />
        </div>

        {/* Results Section */}
        {movies.length > 0 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground text-balance">Perfect for your mood</h2>
              <p className="text-muted-foreground">Based on your preference, here are our AI-recommended movies</p>
            </div>
            <MovieResults movies={movies} />
          </div>
        )}

        {/* Empty State */}
        {!loading && movies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-muted-foreground text-lg">
              Describe your mood to get personalized movie recommendations
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="w-12 h-12 border-4 border-accent border-t-accent/30 rounded-full animate-spin" />
            <p className="text-muted-foreground">Finding perfect movies for you...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Powered by AI. Recommendations are suggestions based on mood analysis.
          </p>
        </div>
      </div>
    </main>
  )
}
