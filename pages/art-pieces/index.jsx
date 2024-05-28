import ArtPieces from "../../components/ArtPieces";
import React from "react";
import { useRouter } from "next/router";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  isFavorite,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      isFavorite={isFavorite}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      onSubmitComment={onSubmitComment}
    />
  );
}
