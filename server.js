var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.configure(function () {
	app.use(express.static(__dirname + "/public")); //set the static files location
	app.use(express.logger("dev")); //logs every request to the console
	//app.use(express.bodyParser()); //pull information from html in POST
	//app.use(express.methodOverride()); //simulate delete and put
});

app.listen(port);
console.log("App listening on port: " + port);