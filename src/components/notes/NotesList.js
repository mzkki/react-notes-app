import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotesItemCard from "./NotesItemCard";

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <Container>
      <Row>
        {
          notes.map((note) => (
            <Col sm={4} key={note.id} className="my-2">
              <NotesItemCard {...note} onArchive={onArchive} onDelete={onDelete} />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default NotesList