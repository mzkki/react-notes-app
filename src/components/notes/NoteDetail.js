import React from "react";
import PropTypes from 'prop-types'
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { showFormattedDate } from "../../utils";

function NoteDetail({ title, body, createdAt }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Form.Text muted>Created on {showFormattedDate(createdAt)}</Form.Text>
      <p>{body}</p>
    </Container>
  )
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default NoteDetail