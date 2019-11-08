// Imports Express
const express = require('express');
// Intialize express App
const app = express();

//Middlewares
//Function that run expecifict route
//Undentifie the User
//Run if is only Authorize
//app.use(auth);


//Routes(enpoints) to work with database.
// Create, Read, Update, Delete
  // POST, Get, PATCH, DEL
//Hell World
app.get('/',(req, res) => {
  res.send('We are on home');
});


app.get('/posts',(req, res) => {
  res.send('We are on posts');
});


//How to we start listening to the server
app.listen(3000);
