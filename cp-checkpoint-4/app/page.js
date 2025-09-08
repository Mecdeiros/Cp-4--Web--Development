"use client";
import { useState, useEffect } from "react";
import NotesForm from "@/components/NotesForm";
import NotesList from "@/components/NotesList";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddNote = (title, content) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    console.log("Notas atualizadas:", notes);
  }, [notes]);

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <SearchBar value={search} onChange={setSearch} />
      <NotesForm onAddNote={handleAddNote} />
      <NotesList notes={filteredNotes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}