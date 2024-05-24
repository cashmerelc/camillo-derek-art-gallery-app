import Image from "next/image";
import { FavoriteButton } from "./FavoriteButton";
export function Spotlight({ pieces }) {
  const SpotlightSelection = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <ul>
      <li>
        <div className="art-piece-image-container">
          <Image
            src={SpotlightSelection.imageSource}
            alt={SpotlightSelection.name}
            width={200}
            height={200}
          />
          <FavoriteButton />
        </div>

        <h2> {SpotlightSelection.artist}</h2>
      </li>
    </ul>
  );
}
