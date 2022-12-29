import React from "react";
// import NotesFooterCard from "./NotesFooterCard";
import NotesHeaderCard from "./NotesHeaderCard";
import NotesCardBody from "./NotesBodyCard";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types'

function NotesItemCard({ id, title, createdAt, body, }) {
  return (
    <Card className="p-3 border-0 shadow" >
      <NotesHeaderCard id={id} title={title} createdAt={createdAt} />
      <NotesCardBody body={body} id={id} />
    </Card>
  )
}

NotesItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}


export default NotesItemCard