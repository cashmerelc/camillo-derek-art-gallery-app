import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { CommentForm } from "@/components/CommentForm";
import { Comments } from "@/components/Comments";
import styled from "styled-components";

const StyledDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1024px;
  align-self: center;
`;

const StyledDetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const StyledDetailsInfoContainer_Headline = styled.div`
display flex;
`;

const StyledDetailsInfoContainer_Details = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledDetailsContainer_Details_Category = styled.div`
  font-weight: bold;
`;

const ColorPalette = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
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
      <StyledDetailsContainer>
        <Image
          src={currentPiece.imageSource}
          alt="go back"
          width={500}
          height={500}
        />
        <StyledDetailsInfoContainer>
          <StyledDetailsInfoContainer_Headline>
            <h2>{currentPiece.name}</h2>
            <h3>{currentPiece.artist}</h3>
          </StyledDetailsInfoContainer_Headline>
          <StyledDetailsInfoContainer_Details>
            <StyledDetailsContainer_Details_Category>
              <p>Year:</p>
              <p>Genre:</p>
              <p>Colors:</p>
            </StyledDetailsContainer_Details_Category>
            <div className="art-piece-details_info-container_details_category-value">
              <p>{currentPiece.year}</p>
              <p>{currentPiece.genre}</p>
              {currentPiece.colors.map((color, index) => {
                return <ColorItem key={index} backgroundColor={color} />;
              })}
            </div>
          </StyledDetailsInfoContainer_Details>
        </StyledDetailsInfoContainer>
      </StyledDetailsContainer>
      {comments?.length > 0 ? <Comments comments={comments} /> : ""}

      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </>
  );
}
