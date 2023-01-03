console.log("I am a server file");

import express from "express";
// const express = require('express')   old method
const app = express()
const port = 3000

app.get('/', (req, res) => {

  console.log("request ip: ", req.ip)

  res.send('Hello World! Time is very precious TY' + new Date().toString());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
