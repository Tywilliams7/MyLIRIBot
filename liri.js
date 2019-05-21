require("dotenv").config();
var fs = require("fs");
var keys = require("./key.js");
var axios = require("axios")
var Spotify = require("node-spotify-api");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var argArray = process.argv.slice(3).join(" ");

function concerts(conc) {
    axios.get("https://rest.bandsintown.com/artists/" + conc + "/events?app_id=codingbootcamp").then(function (response) {
        var res = response.data[0];
        console.log(res.venue);
        console.log(res.lineup + "'s " + res.venue.name + " venue in " + res.venue.city + ", " + res.venue.region + " begins " + moment(res.datetime).format("MM/DD/YYYY"))

    })
}

function movie(mov) {

    if (mov == ""){
        mov = "Mr Nobody"
    }

    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + mov).then(function (response) {
        var rep = response.data;
        console.log(rep.Title);
        console.log(rep.Year);
        console.log(rep.imdbRating);
        console.log(rep.Ratings[1].Source + ": " + rep.Ratings[1].Value);
        console.log(rep.Country);
        console.log(rep.Language);
        console.log(rep.Plot);
        console.log(rep.Actors);

    })
}

function spotifyme(songTitle) {

    if (songTitle == ''){
        songTitle = "The Sign"
    }

    spotify.search({ type: 'track', query: songTitle }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }

        var resp = data.tracks.items[0];
        var artist = resp.artists;

        for (let i = 0; i < artist.length; i++) {
            if (i == 0){
                console.log("Artist(s): " + resp.artists[i].name);
            } else {

                console.log(resp.artists[i].name);
            }

            
        }

        console.log("Song: " + resp.name);
        console.log("Spotify Preview URL: " + resp.preview_url);
        console.log("Album Name: " + resp.album.name);
    });

}

function doSomething() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        var rndText = data.split(",")
        let command = rndText[0];
        let argArray = rndText[1];
        if (command === "concert-this") {
            concerts(argArray);
        
        } else if (command == "movie-this") {
            movie(argArray);
        }
        else if (command == "spotify-this-song") {
            spotifyme(argArray);
        }
        for (var i = 0; i < rndText.length; i++) {
            console.log(rndText[i])
        }
    })
}

// need to add &&
if (command === "concert-this") {
    concerts(argArray);

} else if (command == "movie-this") {
    movie(argArray);
}
else if (command == "spotify-this-song") {
    spotifyme(argArray);
}
else if (command == "do-what-it-says") {
    doSomething()
}




