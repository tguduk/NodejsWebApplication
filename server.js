var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname,{index:"index.html"}));

app.get("/", function(httpRequest, httpResponse, next){
    httpResponse.end();
});
app.listen(3002);
