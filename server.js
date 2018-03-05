const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`App is running at http://localhost:${PORT}`);
    console.log('  Press CTRL-C to stop\n');
  });