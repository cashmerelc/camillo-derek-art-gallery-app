import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ArtPieceDetails } from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  onSubmitComment,
  artPieces,
}) {
  return (
    <>
      <ArtPieceDetails
        pieces={pieces}
        artPieces={artPieces}
        onToggleFavorite={onToggleFavorite}
        onSubmitComment={onSubmitComment}
      />
    </>
  );
}
