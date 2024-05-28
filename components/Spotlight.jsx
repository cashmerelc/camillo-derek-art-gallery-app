import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";
import Link from "next/link";

export function Spotlight({ pieces, onToggleFavorite, isFavorite }) {
  const SpotlightSelection = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <ul>
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

          <Link
            href={`./art-pieces/${SpotlightSelection.slug}`}
            className="link"
          >
            <h2> {SpotlightSelection.artist}</h2>
          </Link>
        </div>
      </li>
    </ul>
  );
}
