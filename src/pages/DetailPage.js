import React from "react";
import NoteDetail from "../components/notes/NoteDetail";
import { archiveNote, deleteNote, getNote, showFormattedDate } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NotFound from "./NotFound";

function DetailPage() {
  const { id } = useParams()
  const note = getNote(id)
  const navigate = useNavigate()

  function onDeleteHandler(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id)
        navigate('/')
        Swal.fire(
          'Deleted!',
          'Catatan kamu berhasil dihapus!',
          'success'
        )
      }
    })
  }

  async function onArchiveHandler(id) {
    archiveNote(id)
    navigate('/')
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast'
      },
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true
    })
    await Toast.fire({
      icon: 'success',
      title: 'Success'
    })
  }

  if (note === null) {
    return <NotFound />
  } else {
    return <NoteDetail {...note} createdAt={showFormattedDate(note.createdAt)} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
  }
}

export default DetailPage