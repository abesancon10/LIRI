require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");

var action = process.argv[2];
var entry = process.argv[3];

switch (action) {
  case "concert-this":
    concert();
    console.log(concert);
  case "spotify-this-song":
    spotify();
    console.log(spotify);
  case "movie-this":
    movie();

  //   case "do-what-it-says":
  //     doIt();
  //     console.log(doIt)
}

function movie() {
  var movieURL =
    "http://www.omdbapi.com/?t=" +
    entry +
    "&y=&plot=short&tomatoes=true&apikey=trilogy";
  console.log(movieURL);

  axios.get(movieURL).then(function(err, response) {
    if (err) {
      response === false;
      return console.log(
        "Title: Mr. Nobody" +
          "\n" +
          "Release Year: 2009" +
          "\n" +
          "IMDB Rating: 7.8" +
          "\n" +
          "Rotten Tomatoes Rating: N/A" +
          "\n" +
          "Country: Belgium, Germany, Canada, France, USA, UK" +
          "\n" +
          "Language: English, Mohawk" +
          "\n" +
          "Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible." +
          "\n" +
          "Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham"
      );
    }
    console.log(
      "Title: " +
        response.data.Title +
        "\n" +
        "Release Year: " +
        response.data.Year +
        "\n" +
        "IMDB Rating: " +
        response.data.imdbRating +
        "\n" +
        "Rotten Tomatoes Rating: " +
        response.data.tomatoMeter +
        "\n" +
        "Country: " +
        response.data.Country +
        "\n" +
        "Language: " +
        response.data.Language +
        "\n" +
        "Plot: " +
        response.data.Plot +
        "\n" +
        "Actors: " +
        response.data.Actors
    );
  });
}
//Rotten Tomatoes rating with OMDB is returning N/A on their site for different movies across different decades
