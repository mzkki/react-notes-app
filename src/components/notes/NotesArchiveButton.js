import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'

function NotesArchiveButton({ id, archived, onArchive }) {
  return (
    <Button variant={archived ? 'success' : 'primary'} onClick={() => onArchive(id)}>
      {archived ? 'Pindahkan' : 'Arsipkan'}
    </Button>
  )
}

NotesArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default NotesArchiveButton