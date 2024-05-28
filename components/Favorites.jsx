import React from "react";
import { ArtPiecePreview } from "./ArtPiecePreview";

export default function Favorites({ artPieces, onToggleFavorite }) {
  const favoritePieces = artPieces.filter((piece) => piece.isFavorite);
  if (favoritePieces.length === 0) {
    return (
      <div className="no-favorites-message">
        <h2>You have not yet selected a favorite</h2>
      </div>
    );
  }
  return (
    <div className="favorite-page">
      {favoritePieces.map((favoritePiece) => (
        <div key={favoritePiece.slug}>
          <ArtPiecePreview
            slug={favoritePiece.slug}
            image={favoritePiece.imageSource}
            title={favoritePiece.name}
            artist={favoritePiece.artist}
            isFavorite={favoritePiece.isFavorite}
            onToggleFavorite={() => onToggleFavorite(favoritePiece.slug)}
          />
        </div>
      ))}
    </div>
  );
}
