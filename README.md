# Tiny Notes App

A minimal full-stack notes application built with Node.js (Express) and React (Vite). Easily add and delete notes using a simple UI.

## Folder Structure

/backend   → Express server with in-memory notes storage  
/frontend  → React (Vite) frontend UI

## Getting Started

1. Clone the repository:

   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:

   npm install

3. Run the project:

   npm start

This will:
- Start the Express backend on http://localhost:3000
- Start the React frontend on http://localhost:5173

## API Endpoints (Backend)

- GET /notes → Returns all notes
- POST /notes → Adds a new note  
  Body: { "text": "Your note here" }
- DELETE /notes/:id → Deletes a note by ID

## Frontend Features

- View a list of notes
- Add new notes with an input field
- Delete notes using the delete button next to each

## Notes on the Approach

- Backend uses an in-memory array to store notes — no database.
- Frontend is built using React + Vite, communicates with backend via fetch.
- Uses the "concurrently" package to run both frontend and backend with one command.
- Simple structure: only two folders (/frontend, /backend).

## Scripts

From the project root:

  "scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "cd backend && node server.js",
    "client": "cd frontend && npm run dev"
  }

## Requirements Met

- [x] Express backend with in-memory storage
- [x] Vite React frontend
- [x] Add/Delete note functionality
- [x] No database
- [x] One GitHub repo with /backend and /frontend folders

## License

MIT – use freely for learning and demo purposes.
