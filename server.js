var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var app = express();


app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller");
app.use("/", routes);

var port = 8080 || env.process.port;
app.listen(port);

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "null",
    database: "burger_db"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("Connected as id: " + connection.threadId);
})

