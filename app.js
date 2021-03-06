var express = require('express');
var app = express();

const env = process.env.NODE_ENV || 'development';
//const bodyParser = require('body-parser');
//const path = require('path');

app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] != 'https'){
    res.redirect('https://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.get('/', function (req, res) {
  res.send('Hello1 World!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});