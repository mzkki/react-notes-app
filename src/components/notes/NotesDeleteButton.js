import React from "react";
import { Button } from "react-bootstrap";

function NotesDeleteButton({ id, onDelete }) {
  return (
    <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
  )
}

export default NotesDeleteButton