import ArtPieces from "../../components/ArtPieces";
import React from "react";
import { useRouter } from "next/router";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  onSubmitComment,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      onSubmitComment={onSubmitComment}
    />
  );
}
