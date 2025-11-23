// Movie Database
const movieDatabase = {
  happy: [
    {
      title: "Forrest Gump",
      genre: "Drama",
      description: "A man with a low IQ achieves great things",
      rating: "8.8/10",
      whyRecommended: "Uplifting journey of perseverance",
      cast: "Tom Hanks, Sally Field, Gary Sinise",
      region: "USA",
      language: "English",
    },
    {
      title: "The Pursuit of Happyness",
      genre: "Drama",
      description: "A struggling salesman overcomes poverty",
      rating: "8.0/10",
      whyRecommended: "Inspiring story about overcoming obstacles",
      cast: "Will Smith, Jaden Smith, Thandie Newton",
      region: "USA",
      language: "English",
    },
    {
      title: "Chef",
      genre: "Comedy Drama",
      description: "A chef starts a food truck journey",
      rating: "8.2/10",
      whyRecommended: "Feel-good movie about passion and family",
      cast: "Jon Favreau, Scarlett Johansson, Sofia Vergara",
      region: "USA",
      language: "English",
    },
    {
      title: "Matilda",
      genre: "Family Fantasy",
      description: "A brilliant girl with special powers",
      rating: "7.7/10",
      whyRecommended: "Charming family fantasy adventure",
      cast: "Mara Wilson, Danny DeVito, Rhea Perlman",
      region: "USA",
      language: "English",
    },
    {
      title: "Finding Nemo",
      genre: "Family Animation",
      description: "A clownfish searches for his son",
      rating: "8.1/10",
      whyRecommended: "Touching adventure about love",
      cast: "Voice actors: Albert Brooks, Ellen DeGeneres",
      region: "USA",
      language: "English",
    },
    {
      title: "Toy Story",
      genre: "Family Animation",
      description: "Toys come to life and embark on adventures",
      rating: "8.3/10",
      whyRecommended: "Heartwarming friendship and loyalty",
      cast: "Voice actors: Tom Hanks, Tim Allen",
      region: "USA",
      language: "English",
    },
    {
      title: "It's a Wonderful Life",
      genre: "Fantasy Drama",
      description: "An angel shows a man his life's meaning",
      rating: "8.7/10",
      whyRecommended: "Classic feel-good film",
      cast: "James Stewart, Donna Reed, Henry Travers",
      region: "USA",
      language: "English",
    },
    {
      title: "The Lion King",
      genre: "Animation",
      description: "A lion cub takes his place in the circle",
      rating: "8.5/10",
      whyRecommended: "Epic and inspirational",
      cast: "Voice actors: Matthew Broderick, Jeremy Irons",
      region: "USA",
      language: "English",
    },
  ],
  sad: [
    {
      title: "Life is Beautiful",
      genre: "Drama",
      description: "A father shields his son from horrors",
      rating: "8.6/10",
      whyRecommended: "Deeply moving and emotional",
      cast: "Roberto Benigni, Nicoletta Braschi",
      region: "Italy",
      language: "Italian",
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      description: "Two inmates find hope in prison",
      rating: "9.3/10",
      whyRecommended: "Powerful story about friendship",
      cast: "Tim Robbins, Morgan Freeman",
      region: "USA",
      language: "English",
    },
    {
      title: "Requiem for a Dream",
      genre: "Drama",
      description: "Four characters struggle with addiction",
      rating: "8.4/10",
      whyRecommended: "Intense and thought-provoking",
      cast: "Ellen Burstyn, Jared Leto, Marion Wayans",
      region: "USA",
      language: "English",
    },
    {
      title: "Grave of the Fireflies",
      genre: "Animation Drama",
      description: "Two orphans survive in wartime Japan",
      rating: "8.5/10",
      whyRecommended: "Profoundly emotional animated film",
      cast: "Voice actors (Japanese): Tsutomu Tatsuhiro",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Amour",
      genre: "Drama",
      description: "An elderly couple faces terminal illness",
      rating: "8.0/10",
      whyRecommended: "Tender and poignant",
      cast: "Jean-Louis Trintignant, Emmanuelle Riva",
      region: "France",
      language: "French",
    },
    {
      title: "12 Years a Slave",
      genre: "Drama",
      description: "A free man is kidnapped and enslaved",
      rating: "8.1/10",
      whyRecommended: "Powerful historical drama",
      cast: "Chiwetel Ejiofor, Lupita Nyong'o, Michael Fassbender",
      region: "USA",
      language: "English",
    },
  ],
  relaxing: [
    {
      title: "Spirited Away",
      genre: "Fantasy Animation",
      description: "A girl navigates a magical bathhouse",
      rating: "8.6/10",
      whyRecommended: "Beautifully soothing animated adventure",
      cast: "Voice actors (Japanese): Rumi Hiiragi, Miyu Irino",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "My Neighbor Totoro",
      genre: "Family Fantasy",
      description: "Sisters befriend friendly forest spirits",
      rating: "8.2/10",
      whyRecommended: "Peaceful and heartwarming",
      cast: "Voice actors (Japanese): Dakota Fanning, Elle Fanning",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Paddington",
      genre: "Family Comedy",
      description: "A bear finds home in London",
      rating: "8.0/10",
      whyRecommended: "Charming and cozy adventure",
      cast: "Ben Whishaw, Hugh Bonneville, Sally Hawkins",
      region: "UK",
      language: "English",
    },
    {
      title: "Studio Ghibli Collection",
      genre: "Animation",
      description: "Various peaceful animated films",
      rating: "8.5/10",
      whyRecommended: "Perfect for relaxation",
      cast: "Multiple voice actors",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "A Monsoon Wedding",
      genre: "Drama Comedy",
      description: "A family prepares for wedding in India",
      rating: "7.6/10",
      whyRecommended: "Colorful and uplifting",
      cast: "Naseeruddin Shah, Lillete Dubey, Vijay Raaz",
      region: "India",
      language: "Hindi",
    },
  ],
  thrilling: [
    {
      title: "Inception",
      genre: "Sci-Fi Action",
      description: "A thief infiltrates the subconscious",
      rating: "8.8/10",
      whyRecommended: "Mind-bending thriller",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Marion Cotillard",
      region: "USA",
      language: "English",
    },
    {
      title: "The Dark Knight",
      genre: "Action Crime",
      description: "Batman battles a mysterious villain",
      rating: "9.0/10",
      whyRecommended: "Intense superhero action",
      cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
      region: "USA",
      language: "English",
    },
    {
      title: "Oldboy",
      genre: "Action Thriller",
      description: "A man seeks revenge for his imprisonment",
      rating: "8.4/10",
      whyRecommended: "Gripping Korean thriller",
      cast: "Choi Min-sik, Yoo Ji-tae, Kang Hae-il",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "Mad Max: Fury Road",
      genre: "Action",
      description: "A chase across a post-apocalyptic desert",
      rating: "8.1/10",
      whyRecommended: "Non-stop adrenaline rush",
      cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
      region: "USA",
      language: "English",
    },
  ],
  mysterious: [
    {
      title: "Shutter Island",
      genre: "Mystery Thriller",
      description: "A detective investigates a mysterious island",
      rating: "8.2/10",
      whyRecommended: "Suspenseful and puzzling",
      cast: "Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo",
      region: "USA",
      language: "English",
    },
    {
      title: "Parasite",
      genre: "Thriller",
      description: "A poor family infiltrates a wealthy household",
      rating: "8.6/10",
      whyRecommended: "Gripping and unpredictable",
      cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "Memento",
      genre: "Mystery Thriller",
      description: "A man with amnesia seeks revenge",
      rating: "8.4/10",
      whyRecommended: "Complex and intriguing",
      cast: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
      region: "USA",
      language: "English",
    },
  ],
  funny: [
    {
      title: "Laughter in Paradise",
      genre: "Comedy",
      description: "A will leads to hilarious situations",
      rating: "7.5/10",
      whyRecommended: "Classic British comedy",
      cast: "Stanley Holloway, Fay Compton, Alastair Sim",
      region: "UK",
      language: "English",
    },
    {
      title: "The Grand Budapest Hotel",
      genre: "Comedy Adventure",
      description: "A concierge and bellhop pursue justice",
      rating: "8.1/10",
      whyRecommended: "Witty and whimsical",
      cast: "Ralph Fiennes, Tony Revolori, F. Murray Abraham",
      region: "USA",
      language: "English",
    },
    {
      title: "Amélie",
      genre: "Comedy Fantasy",
      description: "A shy girl changes lives in Paris",
      rating: "8.3/10",
      whyRecommended: "Charming French comedy",
      cast: "Audrey Tautou, Mathieu Kassovitz, Rufus",
      region: "France",
      language: "French",
    },
  ],
  romantic: [
    {
      title: "Pride and Prejudice",
      genre: "Romance Drama",
      description: "Elizabeth and Darcy's love story",
      rating: "7.8/10",
      whyRecommended: "Timeless romance",
      cast: "Keira Knightley, Matthew Macfadyen, Brenda Blethyn",
      region: "UK",
      language: "English",
    },
    {
      title: "Titanic",
      genre: "Romance Drama",
      description: "A love story amidst a tragedy",
      rating: "7.8/10",
      whyRecommended: "Epic romance",
      cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
      region: "USA",
      language: "English",
    },
    {
      title: "Your Name",
      genre: "Romance Animation",
      description: "Two teens connected across time",
      rating: "8.4/10",
      whyRecommended: "Beautiful animated romance",
      cast: "Voice actors (Japanese): Ryunosuke Kamiki, Mone Kamishiraishi",
      region: "Japan",
      language: "Japanese",
    },
  ],
  adventurous: [
    {
      title: "Avatar",
      genre: "Sci-Fi Action",
      description: "A soldier infiltrates an alien world",
      rating: "7.8/10",
      whyRecommended: "Epic adventure spectacle",
      cast: "Sam Worthington, Zoe Saldana, Stephen Lang",
      region: "USA",
      language: "English",
    },
    {
      title: "The Raid",
      genre: "Action Adventure",
      description: "Fighters battle through a tower",
      rating: "7.6/10",
      whyRecommended: "Intense Indonesian action",
      cast: "Iko Uwais, Ananda George, Ray Sahetapy",
      region: "Indonesia",
      language: "Indonesian",
    },
    {
      title: "Crouching Tiger, Hidden Dragon",
      genre: "Action Adventure",
      description: "Warriors pursue a stolen sword",
      rating: "7.9/10",
      whyRecommended: "Beautiful martial arts adventure",
      cast: "Chow Yun-fat, Michelle Yeoh, Zhang Ziyi",
      region: "China",
      language: "Mandarin",
    },
  ],
  scifi: [
    {
      title: "Interstellar",
      genre: "Sci-Fi Drama",
      description: "Explorers travel through wormholes",
      rating: "8.6/10",
      whyRecommended: "Epic space exploration",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      region: "USA",
      language: "English",
    },
    {
      title: "Blade Runner 2049",
      genre: "Sci-Fi Thriller",
      description: "A replicant hunts a fugitive",
      rating: "8.0/10",
      whyRecommended: "Visually stunning sci-fi",
      cast: "Ryan Gosling, Harrison Ford, Ana de Armas",
      region: "USA",
      language: "English",
    },
    {
      title: "The Matrix",
      genre: "Sci-Fi Action",
      description: "A hacker discovers reality is fake",
      rating: "8.7/10",
      whyRecommended: "Groundbreaking sci-fi",
      cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      region: "USA",
      language: "English",
    },
  ],
  fantasy: [
    {
      title: "The Lord of the Rings",
      genre: "Fantasy Adventure",
      description: "A quest to destroy a magical ring",
      rating: "8.8/10",
      whyRecommended: "Epic fantasy saga",
      cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
      region: "USA",
      language: "English",
    },
    {
      title: "Howl's Moving Castle",
      genre: "Fantasy Animation",
      description: "A cursed girl finds love and adventure",
      rating: "8.2/10",
      whyRecommended: "Enchanting fantasy adventure",
      cast: "Voice actors (Japanese): Takuya Kimura, Chieko Baisho",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Pan's Labyrinth",
      genre: "Fantasy Drama",
      description: "A girl enters a dark magical world",
      rating: "8.1/10",
      whyRecommended: "Dark and immersive fantasy",
      cast: "Ivana Baquero, Doug Jones, Sergi López",
      region: "Spain",
      language: "Spanish",
    },
  ],
}

// DOM Elements
const movieForm = document.getElementById("movieForm")
const moodInput = document.getElementById("moodInput")
const regionSelect = document.getElementById("regionSelect")
const languageSelect = document.getElementById("languageSelect")
const applyFiltersBtn = document.getElementById("applyFiltersBtn")
const quickSuggestions = document.getElementById("quickSuggestions")
const resultsContainer = document.getElementById("resultsContainer")
const moviesList = document.getElementById("moviesList")
const emptyState = document.getElementById("emptyState")
const loadingState = document.getElementById("loadingState")
const moodButtons = document.querySelectorAll(".mood-btn")

let isLoading = false
let filtersApplied = false

// Event Listeners
movieForm.addEventListener("submit", handleSubmit)
applyFiltersBtn.addEventListener("click", handleApplyFilters)
moodButtons.forEach((btn) => btn.addEventListener("click", handleMoodClick))

async function handleSubmit(e) {
  e.preventDefault()
  const mood = moodInput.value.trim()
  if (mood) {
    await getRecommendations(mood)
    moodInput.value = ""
  }
}

function handleApplyFilters() {
  filtersApplied = true
  quickSuggestions.style.display = "block"
  getRecommendations("")
}

function handleMoodClick(e) {
  const mood = e.target.getAttribute("data-mood")
  getRecommendations(mood)
}

async function getRecommendations(mood) {
  isLoading = true
  updateUI()

  const region = regionSelect.value
  const language = languageSelect.value

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const movies = getMoviesFromDatabase(mood, region, language)

  isLoading = false
  updateUI()
  displayMovies(movies)
}

function getMoviesFromDatabase(mood, region, language) {
  const category = findMoodCategory(mood)
  let movies = movieDatabase[category] || movieDatabase.happy

  if (region && region !== "All Regions") {
    movies = movies.filter((movie) => movie.region === region)
  }

  if (language && language !== "All Languages") {
    movies = movies.filter((movie) => movie.language === language)
  }

  return movies
}

function findMoodCategory(mood) {
  const moodLower = mood.toLowerCase()

  if (moodLower.includes("happy") || moodLower.includes("uplifting") || moodLower.includes("joyful")) return "happy"
  if (moodLower.includes("sad") || moodLower.includes("emotional") || moodLower.includes("dramatic")) return "sad"
  if (moodLower.includes("relaxing") || moodLower.includes("peaceful") || moodLower.includes("calm")) return "relaxing"
  if (moodLower.includes("thrilling") || moodLower.includes("intense") || moodLower.includes("action"))
    return "thrilling"
  if (moodLower.includes("mysterious") || moodLower.includes("suspenseful")) return "mysterious"
  if (moodLower.includes("funny") || moodLower.includes("laugh")) return "funny"
  if (moodLower.includes("romantic") || moodLower.includes("love")) return "romantic"
  if (moodLower.includes("adventure")) return "adventurous"
  if (moodLower.includes("sci-fi") || moodLower.includes("science")) return "scifi"
  if (moodLower.includes("fantasy") || moodLower.includes("magic")) return "fantasy"

  return "happy"
}

function displayMovies(movies) {
  moviesList.innerHTML = ""

  if (movies.length === 0) {
    emptyState.classList.remove("hidden")
    resultsContainer.style.display = "none"
    return
  }

  emptyState.classList.add("hidden")
  resultsContainer.style.display = "block"

  movies.forEach((movie) => {
    const card = createMovieCard(movie)
    moviesList.appendChild(card)
  })
}

function createMovieCard(movie) {
  const card = document.createElement("div")
  card.className = "movie-card"
  card.innerHTML = `
        <div class="movie-title">${movie.title}</div>
        <div class="movie-genre">${movie.genre}</div>
        
        <div class="movie-rating">
            <span class="rating-label">Rating:</span>
            <span class="rating-value">${movie.rating}</span>
        </div>
        
        <p class="movie-description">${movie.description}</p>
        
        <div class="movie-section">
            <div class="movie-section-title">Cast</div>
            <div class="movie-section-content">${movie.cast}</div>
        </div>
        
        <div class="movie-section">
            <div class="movie-section-title">Why this pick</div>
            <div class="movie-section-content">${movie.whyRecommended}</div>
        </div>
        
        <div class="movie-section">
            <div class="movie-section-title">Region & Language</div>
            <div class="movie-section-content">${movie.region} - ${movie.language}</div>
        </div>
    `
  return card
}

function updateUI() {
  if (isLoading) {
    emptyState.classList.add("hidden")
    resultsContainer.style.display = "none"
    loadingState.style.display = "flex"
  } else {
    loadingState.style.display = "none"
  }

  moodInput.disabled = isLoading
  regionSelect.disabled = isLoading
  languageSelect.disabled = isLoading
  applyFiltersBtn.disabled = isLoading
  moodButtons.forEach((btn) => (btn.disabled = isLoading))
}
