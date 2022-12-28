import React from "react";
import { archiveNote, getArchivedData } from "../utils";
import Swal from "sweetalert2";
import SearchNote from "../components/notes/SearchNote";
import NotesList from "../components/notes/NotesList";
import { useSearchParams } from 'react-router-dom'

function NotesWrapper() {
  const [searchParams, setSearchParams] = useSearchParams()

  const keyword = searchParams.get('keyword')

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  return <ArchivedNotes defaultKeyword={keyword} SearchNote={changeSearchParams} />
}

class ArchivedNotes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getArchivedData(),
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
        // console.log(notes)
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
    this.setState(() => {
      return {
        notes: getArchivedData()
      }
    })
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

    this.props.SearchNote(keyword)
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      )
    })
    return (
      <>
        <SearchNote SearchNote={this.onSearchNoteHandler} keyword={this.state.keyword} />
        <NotesList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} query={this.state.keyword} />
      </>
    )
  }
}

export default NotesWrapper;