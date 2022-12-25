import React from "react";
import { Form, FloatingLabel, Card } from "react-bootstrap";
import ButtonInput from "./ButtonInput";
import NoteHeader from "./NoteHeader";

class NoteInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return (
      <Card className="border-0 shadow mb-3 p-3">
        <NoteHeader />
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="Judul Catatan"
            className="mb-3"
          >
            <Form.Control type="text" className="border-0 shadow" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Catatan">
            <Form.Control
              as="textarea"
              className="border-0 shadow"
              style={{ height: '100px' }}
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            />
          </FloatingLabel>
          <ButtonInput />
        </form>
      </Card>
    )
  }
}

export default NoteInput;