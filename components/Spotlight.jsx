import Image from "next/image";
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
          <button className="favorite-button">❤️</button>
        </div>

        <h2> {SpotlightSelection.artist}</h2>
      </li>
    </ul>
  );
}
