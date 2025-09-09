'use client'

import NotesForm from '../components/NotesForm'
import NotesList from '../components/NotesList'
import SearchBar from '../components/SearchBar'
import { useNotes } from '../components/NotesProvider'

// Página principal
export default function HomePage() {
  const { notes, query, setQuery } = useNotes()

  return (
    <div>
      <h1>Minhas Anotações</h1>
      <NotesForm />
      <SearchBar query={query} setQuery={setQuery} />
      <NotesList notes={notes} />
    </div>
  )
}
