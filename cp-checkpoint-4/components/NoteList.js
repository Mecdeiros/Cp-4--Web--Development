import NoteItem from "./NoteItem";

export default function NotesList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return <p className="text-gray-500">Nenhuma anotação encontrada.</p>;
  }

  return (
    <ul className="space-y-2">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </ul>
  );
}
