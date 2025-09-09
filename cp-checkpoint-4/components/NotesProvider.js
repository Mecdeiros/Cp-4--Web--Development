'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const NotesContext = createContext()

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [query, setQuery] = useState('')

  // Exemplo de efeito colateral
  useEffect(() => {
    console.log("Notas atualizadas:", notes.length)
  }, [notes])

  function addNote(title, content) {
    const newNote = {
      id: Date.now().toString(),
      title: title || 'Sem título',
      content,
      createdAt: new Date().toISOString(),
    }
    setNotes([newNote, ...notes])
  }

  function deleteNote(id) {
    setNotes(notes.filter(n => n.id !== id))
  }

  function getNoteById(id) {
    return notes.find(n => n.id === id)
  }

  // Filtro da busca
  const filtered = notes.filter(
    n =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.content.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <NotesContext.Provider
      value={{ notes: filtered, addNote, deleteNote, getNoteById, query, setQuery }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  return useContext(NotesContext)
}
