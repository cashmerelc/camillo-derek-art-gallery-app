import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";

export function ArtPiecePreview({
  piece,
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
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </div>

      <h2>
        &quot;{title}&quot; by {artist}
      </h2>
    </>
  );
}
