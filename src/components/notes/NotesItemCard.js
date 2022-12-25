import React from "react";
import NotesFooterCard from "./NotesFooterCard";
import NotesHeaderCard from "./NotesHeaderCard";
import NotesCardBody from "./NotesBodyCard";
import { showFormattedDate } from "../../utils";
import { Card } from "react-bootstrap";

function NotesItemCard({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  return (
    <Card className="p-3 border-0 shadow" >
      <NotesHeaderCard title={title} createdAt={showFormattedDate(createdAt)} />
      <NotesCardBody body={body} />
      <NotesFooterCard id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </Card>
  )
}

export default NotesItemCard