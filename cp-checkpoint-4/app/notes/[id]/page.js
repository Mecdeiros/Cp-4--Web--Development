'use client'

import { useParams } from 'next/navigation'
import { useNotes } from '../../../components/NotesProvider'
import NoteDetail from '../../../components/NoteDetail'

// Página de detalhes de uma nota
export default function NotePage() {
  const params = useParams()
  const { getNoteById } = useNotes()
  const note = getNoteById(params.id)

  if (!note) {
    return <p>Nota não encontrada.</p>
  }

  return <NoteDetail note={note} />
}
