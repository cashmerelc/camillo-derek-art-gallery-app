import { ArtPiecePreview } from "./ArtPiecePreview";

export default function ArtPieces({ pieces, artPieces, onToggleFavorite }) {
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
              isFavorite={
                artPieces?.find((artPiece) => artPiece.slug === piece.slug)
                  ?.isFavorite
              }
              // comments={
              //   artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
              //     ?.comments
              // }
              artPieces={artPieces}
              colors={pieces.colors}
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
              onSubmitComment={() => onSubmitComment(piece.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}
