var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5025;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('server/public'));

app.listen(port, function(){
  console.log("Listening on port: ", port);
});
