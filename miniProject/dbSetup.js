var mongoose = require('mongoose');

let dbURI = "mongodb://test:123456@ds261118.mlab.com:61118/miniproject";
mongoose.connect(dbURI);

function setDbUri(uri){
  dbURI = uri;
}

function connect(){
  return mongoose.connect(dbURI);  
}

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
});

module.exports = {
  setDbUri: setDbUri,
  connect: connect
}
