export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar anotações..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border p-2 rounded"
    />
  );
}
