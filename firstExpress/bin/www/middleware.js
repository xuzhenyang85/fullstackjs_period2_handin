const express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
// HTTP middleware logger for node.js
var logger = require('morgan');

app.use(favicon(path.join(__dirname, 'public', 'images','favicon.ico')));

app.use(logger('dev'));

app.get('/', (req, res) => res.send('Hello World!'))
// will take the value of the PORT if it’s available or default to 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

// Error object function with a specifik text  
app.use(function(req,res,next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;