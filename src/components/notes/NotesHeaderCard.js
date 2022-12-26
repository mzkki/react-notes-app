import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from 'prop-types'

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

NotesHeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default NotesHeaderCard;