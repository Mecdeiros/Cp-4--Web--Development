'use client'

import NoteItem from './NoteItem'

export default function NotesList({ notes }) {
  if (notes.length === 0) return <p>Nenhuma anotação encontrada.</p>

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {notes.map(note => (
        <li key={note.id}>
          <NoteItem note={note} />
        </li>
      ))}
    </ul>
  )
}
