'use client'

import Link from 'next/link'

export default function NoteDetail({ note }) {
  return (
    <div>
      <Link href="/"><button>← Voltar</button></Link>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
    </div>
  )
}
