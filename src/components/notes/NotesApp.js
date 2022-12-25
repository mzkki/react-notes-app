import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../../utils";
import { Container } from "react-bootstrap";

class NotesApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note);
    console.log(notes)
    this.setState({ notes })
  }

  render() {

    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false
    })

    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true
    })

    return (
      <Container className="notes-app">
        <h2>Catatan</h2>
        <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? (
          <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        ) : (
          <p>Tidak ada catatan</p>
        )}

      </Container>
    )
  }
}
export default NotesApp