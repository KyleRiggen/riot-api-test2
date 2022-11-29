require('dotenv').config();
const express = require('express');
const https = require('https');

const TeemoJS = require('teemojs');
let api = TeemoJS(process.env.RIOT_GAMES_API_KEY);

const app = express();
console.log("token", process.env.WEATHER_API_KEY);

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=" + process.env.WEATHER_API_KEY;
    
    https.get(url, function(response) {

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const population = weatherData.city.population;
            res.send("population is " + population);
        });
    });
});

api.get('champion.getChampion', 143)
  .then(data => console.log(data));

// Get C9 Sneaky's games on Ezreal and Kalista for a particular season.
// api.get('na1', 'match.getMatchlist', 78247, { champion: [81, 429], season: 8 })
  //.then(data => console.log(data));

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});