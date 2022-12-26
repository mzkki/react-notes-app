import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'

function NotesDeleteButton({ id, onDelete }) {
  return (
    <Button variant="danger" onClick={() => onDelete(id)}>Hapus</Button>
  )
}

NotesDeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default NotesDeleteButton