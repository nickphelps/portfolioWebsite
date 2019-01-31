var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const morgan = require("morgan");
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))

//setting up server on port 3000
app.listen(4000, function() {
    console.log('Nick Phelps Portfolio Website is running on port 3000...')
})
