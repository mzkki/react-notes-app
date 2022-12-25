import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData()
    }
  }

  render() {
    return (
      <div className="notes-app">
        <h2>Catatan</h2>
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
}
export default NotesApp