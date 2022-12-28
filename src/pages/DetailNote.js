import React from "react";
import NoteDetail from "../components/notes/NoteDetail";
import { getNote, showFormattedDate } from "../utils";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { archiveNote } from "../utils";


export function DetailNoteWrapper() {
  const { id } = useParams()
  return <DetailNote id={id} />
}

class DetailNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      note: getNote(props.id)
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
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
    archiveNote(id)
  }

  render() {
    const note = this.state.note
    if (this.state.note === null) {
      return <p>Movie is note found</p>
    }
    return (
      <NoteDetail {...note} createdAt={showFormattedDate(note.createdAt)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
    )
  }
}

export default DetailNote