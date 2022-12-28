import React from "react";
import { Form, FloatingLabel, Card } from "react-bootstrap";
import ButtonInput from "./ButtonInput";
import MaxLength from "./MaxLength";
import NoteHeader from "./NoteHeader";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";

class NoteInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: EditorState.createEmpty(),
    }
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
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

  onEditorStateChange(body) {
    const parsedBody = convertToHTML(body.getCurrentContent())
    this.setState(() => {
      return {
        body: parsedBody
      }
    })
  }

  async onSubmitEventHandler(event) {
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
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    await Toast.fire({
      icon: 'success',
      title: 'Success'
    })
  }

  render() {
    const maxChar = 50;
    const { editorState } = this.state
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
          <Editor
            body={editorState}
            wrapperClassName="shadow border-0"
            editorClassName="form-control  border-0"
            toolbarClassName="border-0"
            onEditorStateChange={this.onEditorStateChange}
          />
          <ButtonInput />
        </form>
      </Card>
    )
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}

export default NoteInput;