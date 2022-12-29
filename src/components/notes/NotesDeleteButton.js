import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'
import { AiFillDelete } from 'react-icons/ai'

function NotesDeleteButton({ id, onDelete }) {
  return (
    <Button variant="danger" onClick={() => onDelete(id)} className="mx-2"><AiFillDelete size={25} /></Button>
  )
}

NotesDeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default NotesDeleteButton