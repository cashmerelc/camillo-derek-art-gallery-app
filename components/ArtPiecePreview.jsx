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
    <div className="art-piece-card-container">
      <div className="art-piece-image-container">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="art-piece-image"
        />
      </div>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`./art-pieces/${slug}`} className="link">
        <h2>{title}</h2>
        <h3>by {artist}</h3>
      </Link>
    </div>
  );
}
