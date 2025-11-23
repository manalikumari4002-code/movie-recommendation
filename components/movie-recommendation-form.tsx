"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { getMovieRecommendations } from "@/app/actions/get-movie-recommendations"

interface MovieRecommendationFormProps {
  onSubmit: (recommendations: any) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

const MOOD_SUGGESTIONS = [
  "Happy and uplifting",
  "Emotional and dramatic",
  "Thrilling and intense",
  "Relaxing and peaceful",
  "Funny and lighthearted",
  "Action-packed",
]

const REGIONS = [
  "All Regions",
  "USA",
  "UK",
  "France",
  "Japan",
  "South Korea",
  "India",
  "Mexico",
  "Italy",
  "Spain",
  "Germany",
  "China",
  "Brazil",
]

const LANGUAGES = [
  "All Languages",
  "English",
  "Japanese",
  "Korean",
  "French",
  "Spanish",
  "Hindi",
  "Mandarin",
  "Italian",
  "German",
  "Portuguese",
]

export default function MovieRecommendationForm({ onSubmit, loading, setLoading }: MovieRecommendationFormProps) {
  const [input, setInput] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages")
  const [filtersApplied, setFiltersApplied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setLoading(true)
      try {
        const result = await getMovieRecommendations(input, selectedRegion, selectedLanguage)
        if (result.success) {
          onSubmit(result.movies)
        } else {
          onSubmit(null)
        }
      } finally {
        setLoading(false)
      }
      setInput("")
    }
  }

  const handleApplyFilters = async () => {
    setFiltersApplied(true)
    setLoading(true)
    try {
      const result = await getMovieRecommendations("", selectedRegion, selectedLanguage)
      if (result.success) {
        onSubmit(result.movies)
      } else {
        onSubmit(null)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleQuickSelect = async (mood: string) => {
    setFiltersApplied(true)
    setLoading(true)
    try {
      const result = await getMovieRecommendations(mood, selectedRegion, selectedLanguage)
      if (result.success) {
        onSubmit(result.movies)
      } else {
        onSubmit(null)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Input Section */}
      <div className="space-y-3">
        <label className="text-lg font-semibold text-foreground block">What's your mood today?</label>
        <p className="text-sm text-muted-foreground">Describe your mood, and we'll find the perfect movie for you</p>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., I want something intense and mysterious..."
            className="flex-1 px-4 py-3 rounded-lg bg-card text-foreground placeholder-muted-foreground border border-border/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
            disabled={loading}
          />
          <Button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-colors"
          >
            {loading ? "Loading..." : "Recommend"}
          </Button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="space-y-3 bg-card/50 p-4 rounded-lg border border-border/40">
        <p className="text-sm font-medium text-foreground">Filter by region and language</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground block">Region</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              disabled={loading}
              className="w-full px-3 py-2 rounded-lg bg-card text-foreground border border-border/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            >
              {REGIONS.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground block">Language</label>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              disabled={loading}
              className="w-full px-3 py-2 rounded-lg bg-card text-foreground border border-border/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            >
              {LANGUAGES.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button
          type="button"
          onClick={handleApplyFilters}
          disabled={loading}
          className="w-full px-4 py-2 bg-accent/80 hover:bg-accent text-accent-foreground font-medium rounded-lg transition-colors mt-2"
        >
          {loading ? "Searching..." : "Search with these filters"}
        </Button>
      </div>

      {/* Quick Suggestions */}
      {filtersApplied && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground font-medium">Or try a quick mood:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {MOOD_SUGGESTIONS.map((mood) => (
              <button
                key={mood}
                type="button"
                onClick={() => handleQuickSelect(mood)}
                disabled={loading}
                className="px-4 py-2 rounded-lg bg-card border border-border/60 hover:border-accent/50 hover:bg-card/80 text-foreground text-sm transition-all disabled:opacity-50"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      )}
    </form>
  )
}
