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
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                  ?.isFavorite
              }
              // comments={
              //   artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
              //     ?.comments
              // }
              artPiecesInfo={artPiecesInfo}
              onToggleFavorite={() => onToggleFavorite(piece.slug)}
              onSubmitComment={() => onSubmitComment(piece.slug)}
            />
          </li>
        );
      })}
    </ul>
  );
}
