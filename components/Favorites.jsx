import React from "react";
import { ArtPiecePreview } from "./ArtPiecePreview";

export default function Favorites({ artPieces, onToggleFavorite }) {
  const favoritePieces = artPieces.filter((piece) => piece.isFavorite);

  if (favoritePieces.length === 0) {
    return <div>No favorites yet.</div>;
  }
  return (
    <div>
      {favoritePieces.map((favoritePiece) => (
        <div key={favoritePiece.slug}>
          <ArtPiecePreview
            slug={favoritePiece.slug}
            image={favoritePiece.imageSource}
            title={favoritePiece.name}
            artist={favoritePiece.artist}
            isFavorite={favoritePiece.isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}
