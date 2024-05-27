import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";
import Link from "next/link";

export function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>


      <div className="art-piece-image-container">
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`./art-pieces/${slug}`}>
        <h2>
          &quot;{title}&quot; by {artist}
        </h2>
      </Link>
    </>
  );
}
