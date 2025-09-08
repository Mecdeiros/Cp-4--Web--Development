import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="max-w-2xl mx-auto flex justify-between">
        <Link href="/" className="font-bold">
          NotesApp
        </Link>
        <div className="space-x-4">
          <Link href="/">Início</Link>
        </div>
      </nav>
    </header>
  );
}
