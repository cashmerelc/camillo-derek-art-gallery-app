import Link from "next/link";

export function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/" />
        Spotlight
      </li>
      <li>
        <Link href="/art-pieces" />
        Art Pieces
      </li>
      <li>
        <Link href="/favorites" />
        Favorites
      </li>
    </ul>
  );
}
