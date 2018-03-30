const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// will take the value of the PORT if it’s available or default to 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
module.exports = app;