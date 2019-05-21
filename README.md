# LIRI-Bot
liri-node-app
LIRI is a Language Interpretation and Recognition Interface. Use LIRI to get your latest tweets, find out about a song, or a movie, or just choose a random action from your own random file.

Installs
The package.json lists dependent node packages, but for your convenvice, these are the ones to install.

Spotify
npm install spotify

Request
npm install request

FS
npm install fs

Get Started
Here's a quick rundom of the commands you can use in LIRI.

Get Song Info
Retrieves song information for a track:

node liri.js spotify-this-song "Beat It"

![](/images/spotify.png)

Get Concert Info
Retrieves concert information for a artist:

node liri.js concert-this "Drake"

![](images/concert.png)

Get Movie Info
Retrieves movie information for a movie:

node liri.js movie-this "Winter Soldier"

![](images/movie.png)

Get Random Info
Gets random text inside a file and does what it says:

node liri.js do-what-it-says

![](images/do.png)
