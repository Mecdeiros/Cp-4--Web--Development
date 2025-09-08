"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import NoteDetail from "@/components/NoteDetail";

export default function NoteDetailPage() {
  const params = useParams();
  const [notes] = useState([]); // vazio, pq ao atualizar a página perde os dados

  const note = notes.find((n) => n.id === params.id);

  return (
    <div>
      <NoteDetail note={note} />
    </div>
  );
}
