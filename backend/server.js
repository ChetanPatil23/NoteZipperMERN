const express = require("express");
const app = express();
const notes = require("./data/notes.js");
const dotenv = require("dotenv");

dotenv.config();

//Creating API
app.get("/", (req, res) => {
  res.send("Hello there..");
});

//Fetching data from backend through api routes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//Fetching Single Data
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
//Web Server
app.listen(PORT, console.log("Server started Chetan"));

//Install nodemon -> automatically restarts web server when some changes are made