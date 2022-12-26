import React from "react";
import NotesFooterCard from "./NotesFooterCard";
import NotesHeaderCard from "./NotesHeaderCard";
import NotesCardBody from "./NotesBodyCard";
import { showFormattedDate } from "../../utils";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types'

function NotesItemCard({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  console.log(typeof (createdAt))
  return (
    <Card className="p-3 border-0 shadow" >
      <NotesHeaderCard id={id} title={title} createdAt={showFormattedDate(createdAt)} />
      <NotesCardBody body={body} />
      <NotesFooterCard id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
    </Card>
  )
}

NotesItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
}


export default NotesItemCard