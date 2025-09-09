'use client'

export default function SearchBar({ query, setQuery }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Buscar por título ou conteúdo..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', padding: '0.5rem' }}
      />
    </div>
  )
}
