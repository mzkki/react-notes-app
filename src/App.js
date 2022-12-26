import React from "react";
import NotesApp from "./components/notes/NotesApp";
import { Route, Routes } from "react-router-dom";
import { DetailNoteWrapper } from "./pages/DetailNote";

function App() {
  return (
    <>
      <header>
        {/* <h2>Note Detail</h2> */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<NotesApp />} />
          <Route path="/note/:id" element={<DetailNoteWrapper />} />
        </Routes>
      </main>
    </>
  )
}
export default App;