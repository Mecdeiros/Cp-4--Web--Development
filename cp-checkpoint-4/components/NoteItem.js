"use client";
import { useRouter } from "next/navigation";

export default function NoteItem({ note, onDeleteNote }) {
  const router = useRouter();

  return (
    <li className="border rounded p-3 flex justify-between items-start">
      <div>
        <h3 className="font-bold">{note.title}</h3>
        <p className="text-sm text-gray-500">{note.createdAt}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={() => router.push(`/notes/${note.id}`)}
          className="text-blue-600"
        >
          Ver
        </button>
        <button
          onClick={() => onDeleteNote(note.id)}
          className="text-red-600"
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
