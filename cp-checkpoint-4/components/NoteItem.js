'use client'

import Link from 'next/link'
import { useNotes } from './NotesProvider'

export default function NoteItem({ note }) {
  const { deleteNote } = useNotes()

  return (
    <article style={{ border: '1px solid #ddd', padding: '0.5rem', margin: '0.5rem 0' }}>
      <h3>{note.title}</h3>
      <p>{note.content.slice(0, 50)}...</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Link href={`/notes/${note.id}`}>Detalhes</Link>
        <button onClick={() => deleteNote(note.id)}>Excluir</button>
      </div>
    </article>
  )
}
