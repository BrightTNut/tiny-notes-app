import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:3000/notes");
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async () => {
    if (!text.trim()) return;
    const res = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newNote = await res.json();
    setNotes((prev) => [...prev, newNote]);
    setText("");
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:3000/notes/${id}`, { method: "DELETE" });
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div>
        <input
          type="text"
          value={text}
          placeholder="Enter a note..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button
              onClick={() => deleteNote(note.id)}
              style={{ marginLeft: "1rem" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
