import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotesItemCard from "./NotesItemCard";
import PropTypes from 'prop-types'
import { showFormattedDate } from "../../utils";

function NotesList({ notes, onDelete, onArchive, query }) {
  const filterQuery = notes.filter((note) => note.title.toLowerCase().includes(query))

  return (
    <Container>
      <Row>
        {filterQuery.length > 0 ?
          filterQuery.map((note) => (
            <Col sm={4} key={note.id} className="my-2">
              <NotesItemCard {...note} createdAt={showFormattedDate(note.createdAt)} onArchive={onArchive} onDelete={onDelete} />
            </Col>
          )) :
          <div className="note-list__empty">Tidak ada catatan.</div>
        }
      </Row>
    </Container>
  )
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}

export default NotesList