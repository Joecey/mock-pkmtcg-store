// Entry point for our MPA application
// Import pacakges as needed
const express = require('express');

// setup express server
const app = express();
const port = 3000;

// setup routing with express
app.get('/', (req, res) =>{
    res.send("Hello PokemonTCG Shop!");
})


// start the server
app.listen(port, () => {
    console.log("Server is now running on port " + port);
})
