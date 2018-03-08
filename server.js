// NPM/Node Packages
const path = require('path');
const request = require('request');
const express = require('express');
const app = express();


// Local Packages
const keys = require('./keys.js');


// Application Port
const PORT = process.env.PORT || 3000;


// Static file rendering
app.use(express.static('./public'));


// Routing
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/:zip', function(req, res){
    let zipcode = req.params.zip;
    let queryURL = 'http://api.wunderground.com/api/6ada133f06c8d75d/conditions/forecast10day/q/' + zipcode +'.json';
    
    console.log(zipcode);
    console.log(queryURL);
    request({
        url: queryURL,
        json: true
    }, function(error, response, body){
        console.log(JSON.stringify(body, undefined, 2));
        res.send(body);
    });
});

//nyt top stories
app.get('/api/:zip', function(req, res){
    var queryURL = 'http://api.wunderground.com/api/6ada133f06c8d75d/conditions/q/' + zipcode +'.json';
    
    console.log(zipcode);
    console.log(queryURL);
    request({
        url: queryURL,
        json: true
    }, function(error, response, body){
        console.log(JSON.stringify(body, undefined, 2));
        res.send(body);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`\nApp is running at http://localhost:${PORT}`);
    console.log('  Press CTRL-C to stop\n');
  });