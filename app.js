require('dotenv').config();
const express = require('express');
const https = require('https');

const app = express();
console.log("token", process.env.WEATHER_API_KEY);

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=" + process.env.WEATHER_API_KEY;
    
    https.get(url, function(response) {

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const population = weatherData.city.population;
            console.log(population);
        });
    })

    res.send("server is up and running")
});

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});