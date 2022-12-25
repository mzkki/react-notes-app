import React from "react";
import { Button } from "react-bootstrap";

function NotesArchiveButton({ id, onArchive }) {
  return (
    <Button variant="primary" onClick={() => onArchive(id)}>Archive</Button>
  )
}

export default NotesArchiveButton