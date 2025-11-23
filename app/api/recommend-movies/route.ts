import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { mood } = await req.json()

    if (!mood || typeof mood !== "string") {
      return Response.json({ error: "Mood is required" }, { status: 400 })
    }

    console.log("[v0] Requesting recommendations for mood:", mood)

    const { text } = await generateText({
      model: "openai/gpt-5",
      prompt: `You are an expert movie recommendation AI. Based on the user's mood or preference, recommend exactly 6 movies that would be perfect for them.

User's mood/preference: "${mood}"

Return ONLY a valid JSON array with exactly 6 movies. Each movie should have: title, genre, description (brief plot), rating (e.g., "8.5/10"), and whyRecommended (why it matches the mood).

Format:
[
  {
    "title": "Movie Name",
    "genre": "Genre",
    "description": "Brief plot",
    "rating": "8.5/10",
    "whyRecommended": "Why this matches"
  }
]

Provide realistic movie recommendations with actual movies. Include a mix of classic and contemporary films when appropriate.`,
      temperature: 0.7,
      maxOutputTokens: 2000,
    })

    console.log("[v0] Received response from AI model")

    // Parse the JSON response
    const movies = JSON.parse(text)

    if (!Array.isArray(movies) || movies.length !== 6) {
      console.error("[v0] Invalid response format:", movies)
      return Response.json({ error: "Invalid response format" }, { status: 500 })
    }

    console.log("[v0] Successfully generated", movies.length, "recommendations")
    return Response.json({ movies })
  } catch (error) {
    console.error("[v0] Error generating recommendations:", error instanceof Error ? error.message : String(error))
    return Response.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
