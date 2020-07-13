const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const session = require('express-session') ;
const app = express() ;
const path = require('path');

app.use(morgan('common')) ;
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended:true })) ;
app.use(session({
	cookie: { maxAge: 60000 },
    secret : "secret",
    resave : false,
    saveUninitialized : true
})) ;

app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(5000);
console.log("app running on port 5000") ;