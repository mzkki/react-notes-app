import React from "react";
import PropTypes from 'prop-types'

function NotesCardBody({ body }) {
  return (
    <div className="note-item__content">
      <p className="note-item__body">{body}</p>
    </div>
  )
}

NotesCardBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default NotesCardBody;