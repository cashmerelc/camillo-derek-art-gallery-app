import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { CommentForm } from "@/components/CommentForm";
import { Comments } from "@/components/Comments";
import styled from "styled-components";

const ColorPalette = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100px;
`;

const ColorItem = styled.li`
  width: 20px;
  height: 20px;
  margin: 5px;
  display: inline-block;
  background-color: ${(props) => props.backgroundColor};
`;

export function ArtPieceDetails({ pieces, artPieces, onSubmitComment }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPiece = pieces.find((piece) => piece.slug === slug);
  const { name, image } = currentPiece;
  const comments = artPieces?.find(
    (artPiece) => artPiece.slug === slug
  )?.comments;

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
      <ColorPalette>
        <h4>Color Palette:</h4>
        {currentPiece.colors.map((color, index) => {
          return <ColorItem key={index} backgroundColor={color} />;
          // <li key={index}>{color}</li>;
        })}
      </ColorPalette>
      {comments?.length > 0 ? <Comments comments={comments} /> : ""}

      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </>
  );
}
