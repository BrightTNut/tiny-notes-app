// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// In-memory notes store
let notes = [];
let idCounter = 1;

app.use(cors());
app.use(express.json());

// GET /notes - return all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// POST /notes - add a note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const newNote = { id: idCounter++, text };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// DELETE /notes/:id - delete a note by id
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
