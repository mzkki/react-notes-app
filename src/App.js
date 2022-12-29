import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarNote from "./components/etc/Navbar";
import AddNote from "./pages/AddNote";
import { Container } from "react-bootstrap";
import DetailPage from "./pages/DetailPage";
import NotesPage from "./pages/NotesPage";
import './css/toast.css'
import "./css/style.css"

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
            <Route path="/archived" element={<NotesPage />} />
          </Routes>
        </Container>
      </main>
    </>
  )
}
export default App;