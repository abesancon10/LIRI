require("dotenv").config();
const axios = require("axios");
const keys = require("./keys.js");

const input = process.argv;

console.log("Hello there");

switch (action) {
  case "concert-this":
    concert();

  case "concert-this":

  case "spotify-this-song":
    spotify();

  case "movie-this":
    movie();

  case "do-what-it-says":
    doIt();
}

function movie() {
  let movieInput = process.argv;
  let movieName = "";
  for (var i = 2; i < movieInput.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    } else {
      movieName += nodeArgs[i];
    }
  }
  let movieURL =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  console.log(movieURL);

  axios.get(movieURL).then(function(response) {
    console.log("Title: " + response.data.Title) +
      "\n" +
      "Release Year: " +
      response.data.Year +
      "\n" +
      "Rating: " +
      response.data.Ratings;
  });
}
