import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotesItemCard from "./NotesItemCard";

function NotesList({ notes, onDelete, onArchive, query }) {
  const filterQuery = notes.filter((note) => note.title.toLowerCase().includes(query))

  return (
    <Container>
      <Row>
        {filterQuery.length > 0 ?
          filterQuery.map((note) => (
            <Col sm={4} key={note.id} className="my-2">
              <NotesItemCard {...note} onArchive={onArchive} onDelete={onDelete} />
            </Col>
          )) :
          <div className="note-list__empty">Tidak ada catatan.</div>
        }
      </Row>
    </Container>
  )
}

export default NotesList