require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");

var action = process.argv[2];
var entry = process.argv[3];

switch (action) {
  case "concert-this":
    concert();
    console.log(concert)
  case "spotify-this-song":
    spotify();
    console.log(spotify)
  case "movie-this":
    movie();

//   case "do-what-it-says":
//     doIt();
//     console.log(doIt)
}

function movie() {
  var movieName = "";

  for (var i = 2; i < entry.length; i++) {
    if (i > 2 && i < entry.length) {
      movieName = movieName + "+" + entry[i];
    } else {
      movieName += entry[i];
    }

    var movieURL =
      "http://www.omdbapi.com/?t=" +
      movieName +
      "&y=&plot=short&apikey=trilogy";

    axios.get(movieURL).then(function(err, response) {
      if (err) {
        return console.log(err);
      }
      console.log(
        "Title: " +
          response.data.Title +
          "\n" +
          "Release Year: " +
          response.data.Year
      );
    });
  }
}
