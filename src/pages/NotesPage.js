import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import NotesList from "../components/notes/NotesList";
// import NotesList from "../components/notes/NotesList";
import SearchNote from "../components/notes/SearchNote";
import { getActiveData, getArchivedData } from "../utils";

function NotesPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const keyword = searchParams.get('keyword') || ''
  const currentPath = useLocation()
  let notes = null

  if (currentPath.pathname === '/') {
    notes = getActiveData()
  }
  if (currentPath.pathname === '/archived') {
    notes = getArchivedData()
  }

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  function onSearchNoteHandler(keyword) {
    changeSearchParams(keyword)
  }

  return (
    <>
      <SearchNote SearchNote={onSearchNoteHandler} keyword={keyword} />
      {notes ? (
        <NotesList notes={notes} query={keyword} />

      ) : (
        <p>Tidak ada data</p>
      )}
    </>
  )
}

export default NotesPage;