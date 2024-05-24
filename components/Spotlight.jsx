import { ArtPiecePreview } from "./ArtPiecePreview";

export function Spotlight({ pieces }) {
  const SpotlightSelection = pieces[Math.floor(Math.random() * pieces.length)];

  console.log(SpotlightSelection);
  return (
    <ul>
      <li key={SpotlightSelection.slug}>
        <ArtPiecePreview
          image={SpotlightSelection.imageSource}
          title={SpotlightSelection.name}
          artist={SpotlightSelection.artist}
        />
      </li>
    </ul>
  );
}
