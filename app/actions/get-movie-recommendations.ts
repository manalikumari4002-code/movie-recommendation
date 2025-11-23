"use server"

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

const movieDatabase = {
  happy: [
    // USA - English
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
      cast: "Nemo, Marlin, Dory",
      region: "USA",
      language: "English",
    },
    {
      title: "Toy Story",
      genre: "Family Animation",
      description: "Toys come to life and embark on adventures",
      rating: "8.3/10",
      whyRecommended: "Heartwarming friendship and loyalty",
      cast: "Woody, Buzz Lightyear, Jessie",
      region: "USA",
      language: "English",
    },
    {
      title: "It's a Wonderful Life",
      genre: "Fantasy Drama",
      description: "An angel shows a man his life's meaning",
      rating: "8.7/10",
      whyRecommended: "Classic feel-good film",
      cast: "George Bailey, Clarence Odbody, Henry F. Potter",
      region: "USA",
      language: "English",
    },
    {
      title: "Sing",
      genre: "Animation Comedy",
      description: "A koala's theater dreams bring animals together",
      rating: "7.8/10",
      whyRecommended: "Joyful and inspiring musical",
      cast: "Mike Wazowski, Sulley, Randall Boggs",
      region: "USA",
      language: "English",
    },
    {
      title: "The Lion King",
      genre: "Animation",
      description: "A lion cub takes his place in the circle",
      rating: "8.5/10",
      whyRecommended: "Epic and inspirational",
      cast: "Simba, Nala, Scar",
      region: "USA",
      language: "English",
    },
    {
      title: "Up",
      genre: "Animation",
      description: "An old man and boy on a grand adventure",
      rating: "8.6/10",
      whyRecommended: "Heartwarming adventure story",
      cast: "Carl Fredricksen, Russell",
      region: "USA",
      language: "English",
    },
    {
      title: "Inside Out",
      genre: "Animation",
      description: "Emotions guide a girl through life changes",
      rating: "8.2/10",
      whyRecommended: "Joyful exploration of emotions",
      cast: "Joy, Sadness, Anger",
      region: "USA",
      language: "English",
    },
    {
      title: "Soul",
      genre: "Animation Fantasy",
      description: "A jazz musician finds his purpose",
      rating: "8.0/10",
      whyRecommended: "Uplifting and beautiful",
      cast: "Joe Gardner, 22",
      region: "USA",
      language: "English",
    },
    {
      title: "Coco",
      genre: "Family Animation",
      description: "A young musician in the Land of the Dead",
      rating: "8.4/10",
      whyRecommended: "Celebration of family and culture",
      cast: "Miguel, Hector",
      region: "USA",
      language: "English",
    },
    {
      title: "Paddington",
      genre: "Family Comedy",
      description: "A bear finds home in London",
      rating: "8.0/10",
      whyRecommended: "Heartwarming and feel-good",
      cast: "Paddington Bear, Lucy, Roger",
      region: "USA",
      language: "English",
    },
    {
      title: "The Lego Movie",
      genre: "Family Comedy",
      description: "An ordinary lego figure saves the world",
      rating: "7.7/10",
      whyRecommended: "Fun and uplifting adventure",
      cast: "Emmet Brickowicz, Unikitty, Vitruvius",
      region: "USA",
      language: "English",
    },
    {
      title: "Big",
      genre: "Comedy Fantasy",
      description: "A boy wishes to be big and gets his wish",
      rating: "7.3/10",
      whyRecommended: "Charming and feel-good classic",
      cast: "Kevin McCallister, Tim Conway",
      region: "USA",
      language: "English",
    },
    {
      title: "Mrs. Doubtfire",
      genre: "Comedy",
      description: "A father disguises as a nanny to see his kids",
      rating: "7.1/10",
      whyRecommended: "Heartwarming family comedy",
      cast: "Daniel Day-Lewis, Sally Field",
      region: "USA",
      language: "English",
    },
    {
      title: "The Princess Bride",
      genre: "Fantasy Adventure",
      description: "A tale of true love and adventure",
      rating: "8.3/10",
      whyRecommended: "Charming and uplifting",
      cast: "Westley, Buttercup, Inigo Montoya",
      region: "USA",
      language: "English",
    },
    {
      title: "Groundhog Day",
      genre: "Comedy",
      description: "A man relives the same day",
      rating: "8.0/10",
      whyRecommended: "Feel-good with depth",
      cast: "Phil Connors, Rita",
      region: "USA",
      language: "English",
    },
    // Japan - Japanese
    {
      title: "Spirited Away",
      genre: "Fantasy Animation",
      description: "A girl enters a magical bathhouse",
      rating: "8.6/10",
      whyRecommended: "Whimsical and joyful adventure",
      cast: "Chihiro Ogino, Haku, Lin",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Your Name",
      genre: "Romance Animation",
      description: "Two strangers swap bodies across time",
      rating: "8.4/10",
      whyRecommended: "Romantic and heartwarming",
      cast: "Mitsuha Miyamizu, Taki Tsugami",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Ponyo",
      genre: "Fantasy Animation",
      description: "A goldfish falls in love with a boy",
      rating: "7.8/10",
      whyRecommended: "Magical and uplifting tale",
      cast: "Sosuke Akiyama, Ponyo",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "My Neighbor Totoro",
      genre: "Family Fantasy Animation",
      description: "Two sisters meet friendly forest spirits",
      rating: "8.2/10",
      whyRecommended: "Wholesome and magical",
      cast: "Satsuki Kusakabe, Mei Kusakabe, Totoro",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Howl's Moving Castle",
      genre: "Fantasy Animation",
      description: "A girl befriends a wizard and his castle",
      rating: "8.2/10",
      whyRecommended: "Enchanting and heartwarming",
      cast: "Chihiro Ogino, Howl, Yubaba",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Kimi no Na wa",
      genre: "Animation Romance",
      description: "Celestial romance across time",
      rating: "8.3/10",
      whyRecommended: "Beautiful and romantic",
      cast: "Mitsuha Miyamizu, Taki Tsugami",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "A Letter to Momo",
      genre: "Fantasy Animation",
      description: "A girl finds healing through magical friends",
      rating: "7.5/10",
      whyRecommended: "Uplifting coming-of-age story",
      cast: "Momo Hoshino, Tombo",
      region: "Japan",
      language: "Japanese",
    },
    // India - Hindi
    {
      title: "3 Idiots",
      genre: "Comedy Drama",
      description: "Three friends navigate engineering college",
      rating: "8.4/10",
      whyRecommended: "Funny, inspiring, and uplifting",
      cast: "Rajkumar Hirani, Farhan Akhtar",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Rang De Basanti",
      genre: "Drama",
      description: "Five friends change their nation",
      rating: "8.0/10",
      whyRecommended: "Inspiring and motivational",
      cast: "Aamir Khan, Rani Mukerji",
      region: "India",
      language: "Hindi",
    },
    {
      title: "PK",
      genre: "Comedy Drama",
      description: "An alien explores Earth",
      rating: "8.1/10",
      whyRecommended: "Fun and thought-provoking",
      cast: "Aamir Khan, Anushka Sharma",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Barfi!",
      genre: "Comedy Drama",
      description: "A deaf, mute young man falls in love",
      rating: "8.1/10",
      whyRecommended: "Touching and heartwarming",
      cast: "Rajkummar Rao, Priyanka Chopra",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Aamir",
      genre: "Thriller",
      description: "A man faces a moral dilemma",
      rating: "7.2/10",
      whyRecommended: "Gripping and engaging",
      cast: "Aamir Khan, Irrfan Khan",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Lunchbox",
      genre: "Romance Drama",
      description: "A mistake leads to unexpected connection",
      rating: "8.1/10",
      whyRecommended: "Charming and heartwarming",
      cast: "Rishi Kapoor, Irrfan Khan",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Queen",
      genre: "Comedy Drama",
      description: "A woman travels alone after being left at altar",
      rating: "7.8/10",
      whyRecommended: "Empowering and fun",
      cast: "Priyanka Chopra, Ranbir Kapoor",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Monsoon Wedding",
      genre: "Drama Comedy",
      description: "A family prepares for an Indian wedding",
      rating: "7.6/10",
      whyRecommended: "Joyful celebration of life",
      cast: "Aamir Khan, Kareena Kapoor",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Dil Chahta Hai",
      genre: "Comedy Romance",
      description: "Three best friends navigate relationships",
      rating: "7.9/10",
      whyRecommended: "Fun and feel-good",
      cast: "Shah Rukh Khan, Kajol, Ranbir Kapoor",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Chak De! India",
      genre: "Sports Drama",
      description: "A hockey team fights for glory",
      rating: "8.0/10",
      whyRecommended: "Inspiring and uplifting",
      cast: "Aamir Khan, Anushka Sharma",
      region: "India",
      language: "Hindi",
    },
    // South Korea - Korean
    {
      title: "Parasite",
      genre: "Thriller Drama",
      description: "A poor family infiltrates a wealthy household",
      rating: "8.6/10",
      whyRecommended: "Thrilling and clever",
      cast: "Song Kang-ho, Lee Sun-kyun",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "Oldboy",
      genre: "Action Thriller",
      description: "A man seeks revenge after 15 years imprisonment",
      rating: "8.4/10",
      whyRecommended: "Intense and unforgettable",
      cast: "Choi Woo-shik, Kang-ho Song",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "The Handmaiden",
      genre: "Thriller Romance",
      description: "A con artist infiltrates a nobleman's household",
      rating: "8.1/10",
      whyRecommended: "Thrilling and romantic",
      cast: "Tae-hyung Kim, Ji-hye Jeon",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "Train to Busan",
      genre: "Action Thriller",
      description: "Survivors escape a zombie-infected train",
      rating: "7.6/10",
      whyRecommended: "Thrilling and emotional",
      cast: "Yeo-jeong Jo, Dong-hyuk Kang",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "Memories of Murder",
      genre: "Crime Thriller",
      description: "Detectives hunt a serial killer",
      rating: "8.3/10",
      whyRecommended: "Gripping and intense",
      cast: "Hye-kyung Kang, Woo-shik Choi",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "A Tale of Two Sisters",
      genre: "Horror Mystery",
      description: "Two sisters experience mysterious events",
      rating: "7.1/10",
      whyRecommended: "Mysterious and atmospheric",
      cast: "Ji-hye Jeon, Tae-hyung Kim",
      region: "South Korea",
      language: "Korean",
    },
    // France - French
    {
      title: "Amélie",
      genre: "Fantasy Comedy",
      description: "A shy waitress changes people's lives",
      rating: "8.3/10",
      whyRecommended: "Charming and whimsical",
      cast: "Audrey Tautou, Mathieu Kassovitz",
      region: "France",
      language: "French",
    },
    {
      title: "The Intouchables",
      genre: "Comedy Drama",
      description: "A disabled man and caregiver form unlikely bond",
      rating: "8.5/10",
      whyRecommended: "Heartwarming and uplifting",
      cast: "François Cluzet, Omar Sy",
      region: "France",
      language: "French",
    },
    {
      title: "Ratatouille",
      genre: "Family Animation",
      description: "A rat becomes a chef",
      rating: "8.0/10",
      whyRecommended: "Feel-good story about passion",
      cast: "Ratatouille, Linguini, Gusteau",
      region: "France",
      language: "French",
    },
    {
      title: "Midnight in Paris",
      genre: "Fantasy Romance",
      description: "A writer travels back in time",
      rating: "7.7/10",
      whyRecommended: "Romantic and magical",
      cast: "Owen Wilson, Rachel McAdams",
      region: "France",
      language: "French",
    },
    // Mexico - Spanish
    {
      title: "Coco",
      genre: "Family Animation",
      description: "Day of Dead celebration",
      rating: "8.4/10",
      whyRecommended: "Celebration of family and culture",
      cast: "Miguel, Hector, Ernesto",
      region: "Mexico",
      language: "Spanish",
    },
    {
      title: "Pan's Labyrinth",
      genre: "Fantasy Drama",
      description: "A girl enters a magical labyrinth",
      rating: "8.1/10",
      whyRecommended: "Magical and enchanting",
      cast: "Ofelia, Captain Vidal, The Pale Man",
      region: "Mexico",
      language: "Spanish",
    },
    {
      title: "Guillermo del Toro's Pinocchio",
      genre: "Fantasy Animation",
      description: "A unique take on the classic tale",
      rating: "7.4/10",
      whyRecommended: "Magical and artistic",
      cast: "Geppetto, Pinocchio, Stromboli",
      region: "Mexico",
      language: "Spanish",
    },
    // Brazil - Portuguese
    {
      title: "City of God",
      genre: "Crime Drama",
      description: "Life in Rio's slums",
      rating: "8.6/10",
      whyRecommended: "Powerful and gripping",
      cast: "Alexandre Rodrigues, Leandro Firmino",
      region: "Brazil",
      language: "Portuguese",
    },
    {
      title: "Cidade de Deus",
      genre: "Drama",
      description: "Stories from the favelas",
      rating: "8.5/10",
      whyRecommended: "Raw and emotional",
      cast: "Alexandre Rodrigues, Leandro Firmino",
      region: "Brazil",
      language: "Portuguese",
    },
    // China - Mandarin
    {
      title: "Hero",
      genre: "Action Drama",
      description: "A warrior's journey in ancient China",
      rating: "7.5/10",
      whyRecommended: "Epic and visually stunning",
      cast: "Jet Li, Donnie Yen, Zhang Ziyi",
      region: "China",
      language: "Mandarin",
    },
    {
      title: "Crouching Tiger Hidden Dragon",
      genre: "Action Fantasy",
      description: "Warriors fight for a mystical sword",
      rating: "7.9/10",
      whyRecommended: "Elegant martial arts",
      cast: "Yun-Fat Chow, Zhang Ziyi, Michelle Yeoh",
      region: "China",
      language: "Mandarin",
    },
  ],

  sad: [
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      description: "A man finds hope in prison",
      rating: "9.3/10",
      whyRecommended: "Deep and emotionally moving",
      cast: "Tim Robbins, Morgan Freeman",
      region: "USA",
      language: "English",
    },
    {
      title: "The Green Mile",
      genre: "Drama",
      description: "Death row guards encounter miracles",
      rating: "8.6/10",
      whyRecommended: "Profound and touching",
      cast: "Tom Hanks, Michael Clarke Duncan",
      region: "USA",
      language: "English",
    },
    {
      title: "Requiem for a Dream",
      genre: "Drama",
      description: "Four people struggle with addiction",
      rating: "8.3/10",
      whyRecommended: "Haunting and powerful",
      cast: "Ellen Page, Jared Fogle, Jennifer Connelly",
      region: "USA",
      language: "English",
    },
    {
      title: "Life is Beautiful",
      genre: "Drama Comedy",
      description: "A father shields his son during Holocaust",
      rating: "8.6/10",
      whyRecommended: "Heartbreaking yet hopeful",
      cast: "Roberto Benigni, Nicoletta Braschi",
      region: "Italy",
      language: "Italian",
    },
    {
      title: "Grave of the Fireflies",
      genre: "Drama Animation",
      description: "Two siblings survive post-war Japan",
      rating: "8.5/10",
      whyRecommended: "Deeply emotional and tragic",
      cast: "Shinji Hoshi, Setsuko Katsura",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Memories of Murder",
      genre: "Crime Thriller",
      description: "Detectives hunt a serial killer",
      rating: "8.3/10",
      whyRecommended: "Intense and haunting",
      cast: "Hye-kyung Kang, Woo-shik Choi",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "Amour",
      genre: "Drama",
      description: "An elderly couple faces life's end",
      rating: "8.0/10",
      whyRecommended: "Tender and profound",
      cast: "Jean Dujardin, Isabelle Huppert",
      region: "France",
      language: "French",
    },
    {
      title: "The Pursuit of Happyness",
      genre: "Drama",
      description: "A man overcomes homelessness",
      rating: "8.0/10",
      whyRecommended: "Touching and inspiring",
      cast: "Will Smith, Jaden Smith",
      region: "USA",
      language: "English",
    },
    {
      title: "Taare Zameen Par",
      genre: "Drama",
      description: "A teacher helps a dyslexic child",
      rating: "8.3/10",
      whyRecommended: "Emotional and heartwarming",
      cast: "Aamir Khan, Dia Mirza",
      region: "India",
      language: "Hindi",
    },
    {
      title: "Danur",
      genre: "Drama",
      description: "A girl befriends a ghost",
      rating: "7.0/10",
      whyRecommended: "Haunting and emotional",
      cast: "Ayu Utami, Rama Wirama",
      region: "Indonesia",
      language: "Indonesian",
    },
  ],

  relaxing: [
    {
      title: "Studio Ghibli Films",
      genre: "Animation",
      description: "Magical and peaceful worlds",
      rating: "8.2/10",
      whyRecommended: "Calming and beautiful",
      cast: "Various",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Peaceful Warrior",
      genre: "Drama",
      description: "A gymnast finds inner peace",
      rating: "7.1/10",
      whyRecommended: "Meditative and inspiring",
      cast: "David Carradine, Richard Schiff",
      region: "USA",
      language: "English",
    },
    {
      title: "The Secret Life of Walter Mitty",
      genre: "Comedy Adventure",
      description: "A man embraces adventure",
      rating: "7.3/10",
      whyRecommended: "Inspiring and uplifting",
      cast: "Ben Stiller, Naomi Watts",
      region: "USA",
      language: "English",
    },
    {
      title: "Amélie",
      genre: "Fantasy Comedy",
      description: "A shy waitress changes lives",
      rating: "8.3/10",
      whyRecommended: "Whimsical and calming",
      cast: "Audrey Tautou, Mathieu Kassovitz",
      region: "France",
      language: "French",
    },
    {
      title: "Paddington",
      genre: "Family Comedy",
      description: "A bear finds home",
      rating: "8.0/10",
      whyRecommended: "Wholesome and soothing",
      cast: "Paddington Bear, Lucy, Roger",
      region: "USA",
      language: "English",
    },
    {
      title: "100 Feet",
      genre: "Drama",
      description: "A woman finds peace",
      rating: "5.5/10",
      whyRecommended: "Quiet and reflective",
      cast: "Various",
      region: "USA",
      language: "English",
    },
    {
      title: "Noryang",
      genre: "Adventure",
      description: "A general's final battle",
      rating: "7.3/10",
      whyRecommended: "Epic yet peaceful scenery",
      cast: "Various",
      region: "South Korea",
      language: "Korean",
    },
  ],

  thrilling: [
    {
      title: "Inception",
      genre: "Sci-Fi Action",
      description: "A thief steals secrets from dreams",
      rating: "8.8/10",
      whyRecommended: "Mind-bending action thriller",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
      region: "USA",
      language: "English",
    },
    {
      title: "The Dark Knight",
      genre: "Action Crime",
      description: "Batman battles the Joker",
      rating: "9.0/10",
      whyRecommended: "Intense and gripping",
      cast: "Christian Bale, Heath Ledger",
      region: "USA",
      language: "English",
    },
    {
      title: "Mad Max Fury Road",
      genre: "Action",
      description: "Post-apocalyptic chase across desert",
      rating: "8.1/10",
      whyRecommended: "Non-stop action and adrenaline",
      cast: "Tom Hardy, Charlize Theron",
      region: "USA",
      language: "English",
    },
    {
      title: "Die Hard",
      genre: "Action Thriller",
      description: "A cop fights terrorists in a building",
      rating: "8.3/10",
      whyRecommended: "Classic action thriller",
      cast: "Bruce Willis, Alan Rickman",
      region: "USA",
      language: "English",
    },
    {
      title: "Oldboy",
      genre: "Action Thriller",
      description: "A man seeks revenge after 15 years",
      rating: "8.4/10",
      whyRecommended: "Intense and unforgettable",
      cast: "Choi Woo-shik, Kang-ho Song",
      region: "South Korea",
      language: "Korean",
    },
    {
      title: "The Raid",
      genre: "Action",
      description: "Special forces raid a building",
      rating: "7.6/10",
      whyRecommended: "Brutal and thrilling",
      cast: "Iko Uwais, Don Jon",
      region: "Indonesia",
      language: "Indonesian",
    },
    {
      title: "Parasite",
      genre: "Thriller Drama",
      description: "A family infiltrates a wealthy household",
      rating: "8.6/10",
      whyRecommended: "Thrilling and clever",
      cast: "Song Kang-ho, Lee Sun-kyun",
      region: "South Korea",
      language: "Korean",
    },
  ],

  mysterious: [
    {
      title: "Shutter Island",
      genre: "Mystery Thriller",
      description: "A detective uncovers asylum secrets",
      rating: "8.2/10",
      whyRecommended: "Mysterious and suspenseful",
      cast: "Leonardo DiCaprio, Mark Wahlberg",
      region: "USA",
      language: "English",
    },
    {
      title: "Memento",
      genre: "Mystery Thriller",
      description: "A man with amnesia seeks revenge",
      rating: "8.4/10",
      whyRecommended: "Intricate and mysterious",
      cast: "Guy Pearce, Carrie-Anne Moss",
      region: "USA",
      language: "English",
    },
    {
      title: "Gone Girl",
      genre: "Mystery Thriller",
      description: "A wife goes missing on anniversary",
      rating: "8.1/10",
      whyRecommended: "Gripping mystery",
      cast: "Ben Affleck, Rosamund Pike",
      region: "USA",
      language: "English",
    },
    {
      title: "The Sixth Sense",
      genre: "Mystery Thriller",
      description: "A boy sees dead people",
      rating: "8.1/10",
      whyRecommended: "Mysterious and shocking",
      cast: "Haley Joel Osment, Bruce Willis",
      region: "USA",
      language: "English",
    },
    {
      title: "The Handmaiden",
      genre: "Mystery Thriller",
      description: "A con artist infiltrates a household",
      rating: "8.1/10",
      whyRecommended: "Mysterious and thrilling",
      cast: "Tae-hyung Kim, Ji-hye Jeon",
      region: "South Korea",
      language: "Korean",
    },
  ],

  funny: [
    {
      title: "Superbad",
      genre: "Comedy",
      description: "Two friends' last days before college",
      rating: "7.6/10",
      whyRecommended: "Hilarious and relatable",
      cast: "Jon Favreau, Michael Cera",
      region: "USA",
      language: "English",
    },
    {
      title: "The Grand Budapest Hotel",
      genre: "Comedy Adventure",
      description: "A hotel concierge's adventures",
      rating: "8.1/10",
      whyRecommended: "Witty and visually hilarious",
      cast: "Ralph Fiennes, F. Murray Abraham",
      region: "USA",
      language: "English",
    },
    {
      title: "Hangover",
      genre: "Comedy",
      description: "Friends wake with no memory",
      rating: "7.7/10",
      whyRecommended: "Laugh-out-loud funny",
      cast: "Baldwin, Miller, Stone",
      region: "USA",
      language: "English",
    },
    {
      title: "3 Idiots",
      genre: "Comedy Drama",
      description: "Three friends navigate college",
      rating: "8.4/10",
      whyRecommended: "Funny and inspiring",
      cast: "Rajkumar Hirani, Farhan Akhtar",
      region: "India",
      language: "Hindi",
    },
    {
      title: "PK",
      genre: "Comedy Drama",
      description: "An alien explores Earth",
      rating: "8.1/10",
      whyRecommended: "Fun and thought-provoking",
      cast: "Aamir Khan, Anushka Sharma",
      region: "India",
      language: "Hindi",
    },
  ],

  romantic: [
    {
      title: "The Notebook",
      genre: "Romance Drama",
      description: "Two lovers separated by class",
      rating: "7.8/10",
      whyRecommended: "Classic romantic tale",
      cast: "Ryan Gosling, Rachel McAdams",
      region: "USA",
      language: "English",
    },
    {
      title: "Pride and Prejudice",
      genre: "Romance Drama",
      description: "A woman defies societal expectations",
      rating: "7.8/10",
      whyRecommended: "Timeless romance",
      cast: "Keira Knightley, Matthew Macfadyen",
      region: "UK",
      language: "English",
    },
    {
      title: "Titanic",
      genre: "Romance Drama",
      description: "A love story on a doomed ship",
      rating: "7.8/10",
      whyRecommended: "Epic romance",
      cast: "Leonardo DiCaprio, Kate Winslet",
      region: "USA",
      language: "English",
    },
    {
      title: "Your Name",
      genre: "Romance Animation",
      description: "Two strangers swap bodies",
      rating: "8.4/10",
      whyRecommended: "Romantic and magical",
      cast: "Mitsuha Miyamizu, Taki Tsugami",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Midnight in Paris",
      genre: "Romance Fantasy",
      description: "A writer travels to the past",
      rating: "7.7/10",
      whyRecommended: "Romantic and magical",
      cast: "Owen Wilson, Rachel McAdams",
      region: "France",
      language: "French",
    },
    {
      title: "Lunchbox",
      genre: "Romance Drama",
      description: "A mistake leads to connection",
      rating: "8.1/10",
      whyRecommended: "Charming and romantic",
      cast: "Rishi Kapoor, Irrfan Khan",
      region: "India",
      language: "Hindi",
    },
  ],

  adventurous: [
    {
      title: "Raiders of the Lost Ark",
      genre: "Adventure Action",
      description: "An archaeologist hunts artifacts",
      rating: "8.4/10",
      whyRecommended: "Epic adventure",
      cast: "Harrison Ford, Marion Cotillard",
      region: "USA",
      language: "English",
    },
    {
      title: "The Lord of the Rings",
      genre: "Fantasy Adventure",
      description: "A quest to destroy a ring",
      rating: "8.8/10",
      whyRecommended: "Epic fantasy adventure",
      cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
      region: "USA",
      language: "English",
    },
    {
      title: "Crouching Tiger Hidden Dragon",
      genre: "Action Fantasy",
      description: "Warriors fight for a sword",
      rating: "7.9/10",
      whyRecommended: "Elegant martial arts adventure",
      cast: "Yun-Fat Chow, Zhang Ziyi, Michelle Yeoh",
      region: "China",
      language: "Mandarin",
    },
    {
      title: "Hero",
      genre: "Action Adventure",
      description: "A warrior's journey in ancient China",
      rating: "7.5/10",
      whyRecommended: "Epic martial arts adventure",
      cast: "Jet Li, Donnie Yen, Zhang Ziyi",
      region: "China",
      language: "Mandarin",
    },
  ],

  scifi: [
    {
      title: "Interstellar",
      genre: "Sci-Fi Adventure",
      description: "A team travels through wormholes",
      rating: "8.6/10",
      whyRecommended: "Epic and mind-bending",
      cast: "Matthew McConaughey, Anne Hathaway",
      region: "USA",
      language: "English",
    },
    {
      title: "The Matrix",
      genre: "Sci-Fi Action",
      description: "A hacker discovers reality is artificial",
      rating: "8.7/10",
      whyRecommended: "Groundbreaking sci-fi",
      cast: "Keanu Reeves, Laurence Fishburne",
      region: "USA",
      language: "English",
    },
    {
      title: "Blade Runner",
      genre: "Sci-Fi Noir",
      description: "A detective hunts androids",
      rating: "8.1/10",
      whyRecommended: "Classic cyberpunk sci-fi",
      cast: "Harrison Ford, Rutger Hauer",
      region: "USA",
      language: "English",
    },
    {
      title: "Arrival",
      genre: "Sci-Fi Drama",
      description: "A linguist communicates with aliens",
      rating: "7.9/10",
      whyRecommended: "Thoughtful sci-fi",
      cast: "Amy Adams, Jeremy Renner",
      region: "USA",
      language: "English",
    },
  ],

  fantasy: [
    {
      title: "The Lord of the Rings",
      genre: "Fantasy Adventure",
      description: "A quest to destroy a ring",
      rating: "8.8/10",
      whyRecommended: "Epic fantasy masterpiece",
      cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
      region: "USA",
      language: "English",
    },
    {
      title: "Harry Potter Series",
      genre: "Fantasy Adventure",
      description: "A wizard's journey through school",
      rating: "7.6/10",
      whyRecommended: "Magical and enchanting",
      cast: "Daniel Radcliffe, Emma Watson, Rupert Grint",
      region: "UK",
      language: "English",
    },
    {
      title: "Spirited Away",
      genre: "Fantasy Animation",
      description: "A girl enters a magical bathhouse",
      rating: "8.6/10",
      whyRecommended: "Enchanting fantasy",
      cast: "Chihiro Ogino, Haku, Lin",
      region: "Japan",
      language: "Japanese",
    },
    {
      title: "Pan's Labyrinth",
      genre: "Fantasy Drama",
      description: "A girl enters a magical labyrinth",
      rating: "8.1/10",
      whyRecommended: "Dark and magical",
      cast: "Mitsuha Miyamizu, Taki Tsugami",
      region: "Mexico",
      language: "Spanish",
    },
  ],
}

async function fetchMoviesFromIMDb(mood: string, region?: string, language?: string): Promise<Movie[]> {
  try {
    const moodCategory = findMoodCategory(mood)
    const genreMap: Record<string, string> = {
      happy: "comedy,family",
      sad: "drama",
      relaxing: "adventure,animation",
      thrilling: "action,thriller",
      mysterious: "mystery,noir",
      funny: "comedy",
      romantic: "romance",
      adventurous: "adventure,action",
      scifi: "sci-fi",
      fantasy: "fantasy",
    }

    const genres = genreMap[moodCategory as keyof typeof genreMap] || "drama"

    // Query IMDb API for movies matching the mood genre
    const query = `
      query {
        advancedSearch(
          first: 50
          genres: "${genres}"
        ) {
          edges {
            node {
              id
              title
              ratingsSummary {
                aggregateRating
              }
              primaryImage {
                url
              }
              titleType
              releaseDate {
                year
              }
            }
          }
        }
      }
    `

    const response = await fetch("https://caching.graphql.imdb.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error("IMDb API request failed")
    }

    const data = await response.json()
    const movies: Movie[] = []

    if (data.data?.advancedSearch?.edges) {
      for (const edge of data.data.advancedSearch.edges) {
        const node = edge.node

        // Filter by region and language if specified
        // Note: IMDb doesn't return region/language directly, so we use defaults
        if (region && region !== "All Regions" && node.releaseDate?.year) {
          // Add region filtering logic if needed
        }

        const movie: Movie = {
          title: node.title || "Unknown",
          genre: moodCategory.charAt(0).toUpperCase() + moodCategory.slice(1),
          description: `A wonderful ${moodCategory} film from IMDb's top picks`,
          rating: node.ratingsSummary?.aggregateRating ? `${node.ratingsSummary.aggregateRating}/10` : "N/A",
          whyRecommended: `Perfect match for a ${moodCategory} mood!`,
          cast: "Unknown",
          region: region || "International",
          language: language || "Multiple",
        }

        movies.push(movie)
      }
    }

    return movies.length > 0 ? movies : getFallbackMovies(moodCategory, region, language)
  } catch (error) {
    console.error("[v0] IMDb API error, falling back to local database:", error)
    const moodCategory = findMoodCategory(mood)
    return getFallbackMovies(moodCategory, region, language)
  }
}

function getFallbackMovies(category: string, region?: string, language?: string): Movie[] {
  let movies = movieDatabase[category as keyof typeof movieDatabase] || movieDatabase.happy

  if (region && region !== "All Regions") {
    movies = movies.filter((movie) => movie.region.includes(region))
  }

  if (language && language !== "All Languages") {
    movies = movies.filter((movie) => movie.language === language)
  }

  return movies
}

function findMoodCategory(mood: string): string {
  const moodLower = mood.toLowerCase()

  if (
    moodLower.includes("happy") ||
    moodLower.includes("uplifting") ||
    moodLower.includes("joyful") ||
    moodLower.includes("cheerful")
  ) {
    return "happy"
  }
  if (
    moodLower.includes("sad") ||
    moodLower.includes("emotional") ||
    moodLower.includes("dramatic") ||
    moodLower.includes("melancholic")
  ) {
    return "sad"
  }
  if (
    moodLower.includes("relaxing") ||
    moodLower.includes("peaceful") ||
    moodLower.includes("calm") ||
    moodLower.includes("soothing")
  ) {
    return "relaxing"
  }
  if (
    moodLower.includes("thrilling") ||
    moodLower.includes("intense") ||
    moodLower.includes("action") ||
    moodLower.includes("exciting")
  ) {
    return "thrilling"
  }
  if (moodLower.includes("mysterious") || moodLower.includes("mysterious") || moodLower.includes("suspenseful")) {
    return "mysterious"
  }
  if (moodLower.includes("funny") || moodLower.includes("laugh")) {
    return "funny"
  }
  if (moodLower.includes("romantic") || moodLower.includes("love")) {
    return "romantic"
  }
  if (moodLower.includes("adventure") || moodLower.includes("adventure")) {
    return "adventurous"
  }
  if (moodLower.includes("sci-fi") || moodLower.includes("science")) {
    return "scifi"
  }
  if (moodLower.includes("fantasy") || moodLower.includes("magic")) {
    return "fantasy"
  }

  return "happy"
}

export async function getMovieRecommendations(
  mood: string,
  region?: string,
  language?: string,
): Promise<{ success: boolean; movies: Movie[] }> {
  try {
    console.log("[v0] Processing mood request:", mood, "Region:", region, "Language:", language)

    // Try to fetch from IMDb first, fallback to local database
    const movies = await fetchMoviesFromIMDb(mood, region, language)

    console.log("[v0] Found", movies.length, "recommendations")
    return { success: true, movies }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("[v0] Error generating recommendations:", errorMessage)
    return { success: false, movies: [] }
  }
}
