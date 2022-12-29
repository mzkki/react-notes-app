import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'
import { MdArchive, MdUnarchive } from 'react-icons/md'

function NotesArchiveButton({ id, archived, onArchive }) {
  return (
    <Button variant={archived ? 'outline-success' : 'outline-primary'} onClick={() => onArchive(id)}>
      {archived ? <MdUnarchive size={25} /> : <MdArchive size={25} />}
    </Button>
  )
}

NotesArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired
}

export default NotesArchiveButton