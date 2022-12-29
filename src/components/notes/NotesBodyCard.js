import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import parser from 'html-react-parser'

function NotesCardBody({ id, body }) {
  return (
    <div className="note-item__content">
      <div className="note-item__body my-2">
        <Link to={`/note/${id}`} className="text-decoration-none text-black" >{parser(body)}</Link>
      </div>
    </div>
  )
}

NotesCardBody.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired
}

export default NotesCardBody;