import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import parser from 'html-react-parser'

function NotesCardBody({ id, body }) {
  return (
    <div className="note-item__content">
      <p className="note-item__body">
        <Link to={`/note/${id}`} className="text-decoration-none text-black" >{parser(body)}</Link>
      </p>
    </div>
  )
}

NotesCardBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default NotesCardBody;