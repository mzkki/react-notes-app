import React from "react";
import { createRoot } from 'react-dom/client';
// import NotesApp from "./components/notes/NotesApp";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)  
