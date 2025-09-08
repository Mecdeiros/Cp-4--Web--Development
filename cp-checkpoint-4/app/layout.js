export const metadata = {
  title: "Notes App",
  description: "App simples de anotações em Next.js",
};

import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="max-w-2xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}