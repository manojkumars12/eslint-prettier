import express from "express";

const app = express();

// eslint-disable-next-line
const x = 1;
app.get('/', async (req, res) => {
  res.json({
    msg: "hi there"
  })
})