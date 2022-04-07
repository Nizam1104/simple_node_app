// const express = require("express");
// const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost/ourdata');
// mongoose.Promise = global.Promise;


// const app = express();
// app.use(express.static('public'));
// app.use(express.json());
// app.use('/api',require('./routes/api'));
// app.listen(3000, function(){
//      console.log("listening on port 3000")
//      })


const express = require('express');
const { send } = require('express/lib/response');
const mongoose = require('mongoose');

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ourdata');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go!');
    app.get('/mnv', (req,res)=>{
         res.send("Hello")
    })
});

// app.listen(process.env.port || 3000, function(){
//      console.log('Ready to Go!');
//      app.get('/mn', (req,res)=>{
//           res.send("hello")
//      })
//  });