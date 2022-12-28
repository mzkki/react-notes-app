import React from "react";
import { Route, Routes } from "react-router-dom";
// import { DetailNoteWrapper } from "./pages/DetailNote";
import NavbarNote from "./components/etc/Navbar";
import AddNote from "./pages/AddNote";
// import Notes from "./pages/Notes";
import { Container } from "react-bootstrap";
import ArchivedNotes from "./pages/ArchivedNotes";
import DetailPage from "./pages/DetailPage";
import NotesPage from "./pages/NotesPage";

function App() {
  return (
    <>
      <NavbarNote />
      <main className="my-5">
        <Container className="notes-app  mt-4">
          <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/note/:id" element={<DetailPage />} />
            <Route path="/archived" element={<ArchivedNotes />} />
          </Routes>
        </Container>
      </main>
    </>
  )
}
export default App;