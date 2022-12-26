import React from "react";
import NoteDetail from "../components/notes/NoteDetail";
import { getNote } from "../utils";
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
    if (this.state.note === null) {
      return <p>Movie is note found</p>
    }
    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    )
  }
}

export default DetailNote