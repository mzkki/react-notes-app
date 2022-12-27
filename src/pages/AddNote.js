import React from "react";
import { addNote } from "../utils";
import NoteInput from "../components/form/NoteInput";
import { useNavigate } from 'react-router-dom'

function AddNote() {
  const navigate = useNavigate()

  function onAddNoteHandler(note) {
    addNote(note)
    navigate('/')
  }
  return (
    <NoteInput addNote={onAddNoteHandler} />
  )
}

export default AddNote;