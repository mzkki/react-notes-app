import React from "react";
import NoteDetail from "../components/notes/NoteDetail";
import { getNote, showFormattedDate } from "../utils";
import { useParams } from "react-router-dom";


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
  }

  render() {
    const note = this.state.note
    if (this.state.note === null) {
      return <p>Movie is note found</p>
    }
    return (
      <NoteDetail {...note} createdAt={showFormattedDate(note.createdAt)} />
    )
  }
}

export default DetailNote