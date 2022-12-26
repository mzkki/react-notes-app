import React from "react";
import NotesApp from "./components/notes/NotesApp";
import { Route, Routes } from "react-router-dom";
import { DetailNoteWrapper } from "./pages/DetailNote";
import NavbarNote from "./components/etc/Navbar";

function App() {
  return (
    <>
      <NavbarNote />
      <main className="mt-5">
        <Routes>
          <Route path="/" element={<NotesApp />} />
          <Route path="/note/:id" element={<DetailNoteWrapper />} />
        </Routes>
      </main>
    </>
  )
}
export default App;