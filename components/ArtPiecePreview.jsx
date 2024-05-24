import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";

export function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <div className="art-piece-image-container">
        <Image src={image} alt={title} width={200} height={200} />
        <FavoriteButton />
      </div>

      <h2>
        &quot;{title}&quot; by {artist}
      </h2>
    </>
  );
}
