import React from "react";
import NoteDetail from "../components/notes/NoteDetail";
import { getNote } from "../utils";
import { useParams } from "react-router-dom";
import { getInitialData } from "../utils";


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
    console.log(getInitialData())
  }

  render() {
    if (this.state.note === null) {
      return <p>Movie is note found</p>
    }
    return (
      <NoteDetail {...this.state.note} />
    )
  }
}

export default DetailNote