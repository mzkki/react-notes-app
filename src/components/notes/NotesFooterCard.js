import React from "react";
import { Stack } from "react-bootstrap";
import NotesArchiveButton from "./NotesArchiveButton";
import NotesDeleteButton from "./NotesDeleteButton";
import PropTypes from 'prop-types'

function NotesFooterCard({ id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item__footer">
      <Stack gap={2}>
        <NotesArchiveButton id={id} archived={archived} onArchive={onArchive} />
        <NotesDeleteButton id={id} onDelete={onDelete} />
      </Stack>
    </div>
  )
}

NotesArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  //ondelete tidak required karena menggunakan confirm sweetalert yang defaultnya memberikan nilai undefined
  onDelete: PropTypes.func,
  onArchive: PropTypes.func.isRequired
}

export default NotesFooterCard;