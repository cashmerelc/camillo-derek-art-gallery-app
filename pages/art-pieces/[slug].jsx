import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ArtPieceDetails } from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  onSubmitComment,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieceDetails
        pieces={pieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        onSubmitComment={onSubmitComment}
      />
    </>
  );
}
