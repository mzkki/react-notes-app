import React from "react";
import NotesApp from "./components/notes/NotesApp";
import { Route, Routes } from "react-router-dom";
import { DetailNoteWrapper } from "./pages/DetailNote";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <header>
          {/* <h2>Note Detail</h2> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<NotesApp />} />
            <Route path="/note/:id" element={<DetailNoteWrapper />} />
          </Routes>
        </main>
      </Container>
    </>
  )
}
export default App;