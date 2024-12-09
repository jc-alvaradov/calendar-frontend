import Link from "next/link";

export async function Header() {
  return (
    <header>
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">Inicio</Link>
        <Link href="/about-me">Sobre mí</Link>
        <Link href="/downloads">Descargas</Link>
      </nav>
    </header>
  );
}
