import React from "react";
import { Form } from "react-bootstrap";

function NotesHeaderCard({ title, createdAt }) {
  return (
    <div className="note-item__header">
      <h2 className="note-item__title">{title}</h2>
      <Form.Text muted className="note-item__date">
        {createdAt}
      </Form.Text>
    </div>
  )
}

export default NotesHeaderCard;