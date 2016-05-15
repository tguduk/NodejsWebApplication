s = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname,{index:"index.html"}));


app.get("/", function(httpRequest, httpResponse, next){
    console.log("turgt");
    httpResponse.end();
});
app.listen(3002);
~                   
