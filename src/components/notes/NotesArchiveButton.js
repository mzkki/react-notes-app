import React from "react";
import { Button } from "react-bootstrap";

function NotesArchiveButton({ id, archived, onArchive }) {
  return (
    <Button variant={archived ? 'success' : 'primary'} onClick={() => onArchive(id)}>
      {archived ? 'Pindahkan' : 'Arsipkan'}
    </Button>
  )
}

export default NotesArchiveButton