console.log("I am a server file");

import express from "express";
import path from 'path';
// const express = require('express')   old method
const app = express()
const port = process.env.PORT || 3000;

// app.get works when there comes a request of get
app.get('/abc', (req, res) => {

  console.log("request ip: ", req.ip)
  res.send('Hello World!' + new Date().toString());
})

// app.use works on every kind of method
// path of the folder e.g: C://Abc
// __dirname = directory name or path of folder 
// first resolve then join
const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, './web/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})