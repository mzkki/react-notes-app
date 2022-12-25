import React from "react";
import { Form, FloatingLabel, Card } from "react-bootstrap";
import ButtonInput from "./ButtonInput";
import MaxLength from "./MaxLength";
import NoteHeader from "./NoteHeader";
import Swal from "sweetalert2";

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
    const maxChar = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, maxChar)
      }
    });
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
    if (this.state.title === '' && this.state.body === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judul dan Body Catatan tidak boleh kosong',
      })
      return false
    }

    if (this.state.title === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Judul Catatan tidak boleh kosong',
      })
      return false
    }

    if (this.state.body === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Body Catatan tidak boleh kosong',
      })
      return false
    }

    this.props.addNote(this.state)
    Swal.fire({
      icon: 'success',
      title: 'Catatan mu telah disimpan',
      showConfirmButton: false,
      timer: 1500
    })
  }

  render() {
    const maxChar = 50;
    return (
      <Card className="border-0 shadow mb-3 p-3" >
        <NoteHeader />
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="Judul Catatan"
          >
            <Form.Control type="text" className="border-0 shadow" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Judul Catatan" />
          </FloatingLabel>
          <MaxLength number={maxChar - this.state.title.length} />
          <FloatingLabel controlId="floatingTextarea2" label="Catatan">
            <Form.Control
              as="textarea"
              className="border-0 shadow mt-3"
              style={{ height: '100px' }}
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
              placeholder="Catatan"
            />
          </FloatingLabel>
          <ButtonInput />
        </form>
      </Card>
    )
  }
}

export default NoteInput;