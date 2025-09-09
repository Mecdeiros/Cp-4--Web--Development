'use client'

import { useState } from 'react'
import { useNotes } from './NotesProvider'

export default function NotesForm() {
  const { addNote } = useNotes()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title && !content) return
    addNote(title, content)
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="submit">Criar</button>
    </form>
  )
}
