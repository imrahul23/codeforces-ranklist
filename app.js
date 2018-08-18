var express = require("express");
var app     = express();
var path    = require("path");
const bodyParser = require("body-parser");
const standings = require("./standings")

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function(req,res){
  res.render('index', {ID: null, Name: null});
});

app.post('/', function (req, res) {
    var ContestID = req.body.ContestID;

    standings.getStandings(ContestID, (comment, results) => {
        if (comment) {
            console.log(comment);
        }
        else {
            console.log(ContestID);
            console.log(results.result.contest.id);
            console.log(results.result.contest.name);
            var ID = results.result.contest.id;
            var Name = results.result.contest.name;
            res.render('index', {ID: ID, Name: Name});
        }
    });
});



app.listen(3000);

console.log("Running at Port 3000");
