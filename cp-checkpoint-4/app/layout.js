import './globals.css'
import Header from '../components/Header'
import { NotesProvider } from '../components/NotesProvider'

export const metadata = {
  title: 'Checkpoint 4 - App de Anotações',
  description: 'App simples em memória com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* NotesProvider mantém todas as notas apenas em memória */}
        <NotesProvider>
          <Header />
          <main style={{ maxWidth: 800, margin: '0 auto', padding: '1rem' }}>
            {children}
          </main>
        </NotesProvider>
      </body>
    </html>
  )
}
