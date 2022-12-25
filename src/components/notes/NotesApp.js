import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../../utils";
import { Container } from "react-bootstrap";
import NoteInput from "../form/NoteInput";
import Swal from "sweetalert2";

class NotesApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
        Swal.fire(
          'Deleted!',
          'Catatan kamu berhasil dihapus!',
          'success'
        )
      }
    })
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note);
    this.setState({ notes })
    Swal.fire({
      icon: 'success',
      title: 'Catatan kamu berhasil dipindahkan',
      showConfirmButton: false,
      timer: 1500
    })
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false
          }
        ]
      }
    });
  }

  render() {

    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false
    })

    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true
    })

    return (
      <Container className="notes-app mt-4">
        <NoteInput addNote={this.onAddNoteHandler} />
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