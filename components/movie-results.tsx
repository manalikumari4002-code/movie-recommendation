"use client"

import { MovieCard } from "@/components/movie-card"

interface Movie {
  title: string
  genre: string
  description: string
  rating: string
  whyRecommended: string
  poster: string
}

interface MovieResultsProps {
  movies: Movie[]
}

export default function MovieResults({ movies }: MovieResultsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  )
}
