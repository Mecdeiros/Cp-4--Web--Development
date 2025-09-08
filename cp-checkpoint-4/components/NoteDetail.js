export default function NoteDetail({ note }) {
  if (!note) {
    return <p className="text-gray-500">Nota não encontrada.</p>;
  }

  return (
    <div className="border rounded p-4">
      <h1 className="text-xl font-bold">{note.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{note.createdAt}</p>
      <p>{note.content}</p>
    </div>
  );
}
