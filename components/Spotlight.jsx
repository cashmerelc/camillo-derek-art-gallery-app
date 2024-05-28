import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";
export function Spotlight({ pieces, onToggleFavorite, isFavorite }) {
  const SpotlightSelection = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <ul className="favorite-page">
      <li>
        <div className="art-piece-card-container">
          <div className="art-piece-image-container">
            <Image
              src={SpotlightSelection.imageSource}
              alt={SpotlightSelection.name}
              width={800}
              height={800}
              className="art-piece-image"
            />
            <FavoriteButton
              onToggleFavorite={() => onToggleFavorite(SpotlightSelection.slug)}
            />
          </div>

          <h2> {SpotlightSelection.artist}</h2>
        </div>
      </li>
    </ul>
  );
}
