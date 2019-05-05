# LIRI-bot

Hello. This my LIRI-bot. It currently is still a work in progress, however I have have gotten part of it to work.

WHAT'S MY OBJECTIVE

My overall objective and goal is to utilize three API's to pull data using JS Node based on four different commands. These commands are:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says` 

The APIs I will using is Spotify, Bandsintown, and OMDB.

Each command should return either a set of information or a default if there is an error:
  `node liri.js concert-this <artist/band name here>`

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

     * (Error) Please choose another artist/band.

   `node liri.js spotify-this-song '<song name here>'`

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

     * (Error) If no song is provided then your program will default to "The Sign" by Ace of Base.
    
   `node liri.js movie-this '<movie name here>'`
    
     * Title of the movie.
    
     * Year the movie came out.
    
     * IMDB Rating of the movie.
    
     * Rotten Tomatoes Rating of the movie.
    
     * Country where the movie was produced.
    
     * Language of the movie.
    
     * Plot of the movie.
    
     * Actors in the movie.
    
     * (Error) If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   
   `node liri.js do-what-it-says`

     * This command will run one of other commands with the text from the 'random.txt' file.

Currently only the 'movie-this' command is fully functional and the 'concert-this' command is currently being worked on.

May the Force Be You.

-Alex Besancon