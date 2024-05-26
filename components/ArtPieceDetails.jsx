import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export function ArtPieceDetails({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => piece.slug === slug);
  const { name, image } = currentPiece;
  return (
    <>
      <Link href={"/art-pieces"}>
        <Image src="/go-back-icon.png" width={20} height={20} alt="go back" />
      </Link>
      <div className="art-piece-details_image-container">
        <Image
          src={currentPiece.imageSource}
          alt="go back"
          width={500}
          height={500}
        />
      </div>
      <div className="art-piece-details_info-container">
        <div className="art-piece-details_info-container_headline">
          <h2>{currentPiece.name}</h2>
          <h3>{currentPiece.artist}</h3>
        </div>
        <div className="art-piece-details_info-container_details">
          <div className="art-piece-details_info-container_details_category-name">
            <p>Year:</p>
            <p>Genre:</p>
          </div>
          <div className="art-piece-details_info-container_details_category-value">
            <p>{currentPiece.year}</p>
            <p>{currentPiece.genre}</p>
          </div>
        </div>
      </div>
    </>
  );
}
