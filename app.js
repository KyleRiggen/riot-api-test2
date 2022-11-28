require('dotenv').config();
const express = require('express');
const https = require('https');

const app = express();
console.log("token", process.env.WEATHER_API_KEY);

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=d3e7e1ba0647c411ae6dbb5e5e80e215"
    
    https.get(url, function(response) {
        console.log(response);
    })

    res.send("server is up and running")
});

app.listen(3000, function() {
    console.log("Server is running on port 3000")
});