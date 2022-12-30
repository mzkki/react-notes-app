import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotesArchiveButton from "./NotesArchiveButton";
import NotesDeleteButton from "./NotesDeleteButton";
import PropTypes from 'prop-types'
import BackButton from "./BackButton";

function NotesFooterCard({ id, archived, onDelete, onArchive }) {
  console.log(typeof (onDelete))
  return (
    <div className="note-item__footer">
      <Container fluid="sm" className="mt-4">
        <Row>
          <Col md={4} className="mt-2">
            <NotesArchiveButton id={id} archived={archived} onArchive={onArchive} />
            <NotesDeleteButton id={id} onDelete={onDelete} /></Col>
          <Col md={{ span: 4, offset: 4 }} className="mt-2">
            <BackButton archived={archived} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

NotesFooterCard.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default NotesFooterCard;