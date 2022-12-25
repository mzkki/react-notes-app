import React from "react";

function NotesCardBody({ body }) {
  return (
    <div className="note-item__content">
      <p className="note-item__body">{body}</p>
    </div>
  )
}

export default NotesCardBody;