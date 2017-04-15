var express = require('express');
var app = express();


// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(express.static('../client/build'));
