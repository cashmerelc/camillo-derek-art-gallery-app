import { ArtPiecePreview } from "./ArtPiecePreview";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecePreview
              slug={piece.slug}
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                  ?.isFavorite
              }
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}
