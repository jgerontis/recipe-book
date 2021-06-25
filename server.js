/*

Where most of our work will be done

*/

// import so you can use it
const express = require('express');
const { store, Recipe } = require('./model')
const cors = require("cors")
// instantiate your app/server
const app = express()


app.use(cors());

app.use(express.static("static"));

//
app.use(express.json({}));





























module.exports = app;