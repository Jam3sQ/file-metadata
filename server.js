const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 8080; // Set ports
const multer = require('multer'); //Require multer module 

// Initialize multer to upload files 
app.use(multer({dest:'./uploads/'}).single('upfile'));
var upload = multer({ dest: 'uploads/' });

//Middleware 
app.use('/', express.static(__dirname + '/public'));

//Post request to get file size 
app.post('/get-file-size', upload.single('upfile'), function(req, res){

    // Create object to output to user
    var object = {
        'size': req.file.size
    }; 
    res.end(JSON.stringify(object)); 
}); 

// Port
app.listen(port, function(){
    console.log("Listening on port: " + port); 
})
