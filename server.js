const path = require('path');
const express = require('express');
const app = express();

const keys = require('./keys.js');

const PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + '/css'));




app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
    console.log('  Press CTRL-C to stop\n');
  });