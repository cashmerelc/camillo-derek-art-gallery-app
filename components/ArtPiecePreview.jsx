import Image from "next/image";
import Link from "next/link";

export function ArtPiecePreview({ slug, image, title, artist }) {
  return (
    <Link href={`./art-pieces/${slug}`}>
      <div className="art-piece-image-container">
        <Image src={image} alt={title} width={200} height={200} />
        <button className="favorite-button">❤️</button>
      </div>

      <h2>
        &quot;{title}&quot; by {artist}
      </h2>
    </Link>
  );
}
