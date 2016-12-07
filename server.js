const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 8080; 

//Allows user to pload and submit a file
// Use a template engine
// Generate a post request
// Extract data from that post request 
// Using mutler npm
// Recieve size of the file in JSON format

app.listen(port, function(){
    console.log("Listening on port: " + port); 
})
