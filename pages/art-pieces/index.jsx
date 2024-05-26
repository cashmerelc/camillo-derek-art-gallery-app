import ArtPieces from "../../components/ArtPieces";
import React from "react";
import { useRouter } from "next/router";

export default function ArtPiecesPage({ pieces }) {
  return <ArtPieces pieces={pieces} />;
}
