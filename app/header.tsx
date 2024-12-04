import { getHome } from "./strapi";

export default async function Header() {
  const { userName } = await getHome();

  return (
    <header>
      <nav className="container mx-auto flex justify-between items-center py-4">
        <h1>{userName}</h1>
      </nav>
    </header>
  );
}
