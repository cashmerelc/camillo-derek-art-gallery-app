import ArtPieces from "../../components/ArtPieces";
import React from "react";

export default function ArtPiecesPage({ pieces, onToggleFavorite }) {
  return <ArtPieces pieces={pieces} onToggleFavorite={onToggleFavorite} />;
}
