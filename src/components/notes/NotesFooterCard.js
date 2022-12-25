import React from "react";
import { Stack } from "react-bootstrap";
import NotesArchiveButton from "./NotesArchiveButton";
import NotesDeleteButton from "./NotesDeleteButton";

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

export default NotesFooterCard;