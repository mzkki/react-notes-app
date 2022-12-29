import React from "react";
import PropTypes from 'prop-types'
import { Card, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import parser from 'html-react-parser'
import NotesFooterCard from "./NotesFooterCard";

function NoteDetail({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <Container className="text-center">
      <Card className="shadow border-0 p-5" >
        <h2>{title}</h2>
        <Form.Text muted>Created on {createdAt}</Form.Text>
        <div>{parser(body)}</div>
        <NotesFooterCard id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
      </Card>
    </Container>
  )
}

NoteDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default NoteDetail