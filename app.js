var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World,Yogita here");
});

app.listen(4000);
