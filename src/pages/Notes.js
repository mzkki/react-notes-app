import React from "react";
import { getInitialData } from "../utils";
import Swal from "sweetalert2";
import SearchNote from "../components/notes/SearchNote";
import NotesList from "../components/notes/NotesList";


class Notes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      keyword: props.defaultKeyword || ''
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
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

  onSearchNoteHandler(keyword) {
    this.setState(() => {
      return {
        keyword
      }
    })
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => {
      return note.archived === false
    })

    const archivedNotes = this.state.notes.filter((note) => {
      return note.archived === true
    })
    return (
      <>
        <SearchNote SearchNote={this.onSearchNoteHandler} keyword={this.state.keyword} />
        <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} query={this.state.keyword} />
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? (
          <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} query={this.state.keyword} />
        ) : (
          <p>Tidak ada catatan yang diarsipkan</p>
        )}
      </>
    )
  }
}

export default Notes;