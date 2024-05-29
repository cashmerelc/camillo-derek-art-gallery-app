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
  align-self: left;
  margin-top: 10rem;
`;

const StyledDetailsInfoContainer = styled.div`
  align-self: left;
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
`;

const StyledDetailsInfoContainer_Headline = styled.div`
display flex;
`;

const StyledDetailsInfoContainer_Details = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const StyledDetailsContainer_Details_Category = styled.div`
  font-weight: bold;
  margin-top: 2rem;
`;

const StyledDetailsContainer_Details_Value = styled.div`
  margin-top: 2rem;
`;

const StyledDetails_CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem 10rem;
  padding-top: 5rem;
`;
const StyledDetails_CommentSection_Headline = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  color: lightgray;
`;

const StyledDetails_CommentSection_Line = styled.hr`
  height: 1px;
  width: 70%;
  border: solid 0.5px lightgray;
`;

const ColorItem = styled.li`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 5px;
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
      <StyledDetailsContainer>
      <Link href={"/art-pieces"}>
        <Image src="/go-back-icon.png" width={20} height={20} alt="go back" />
      </Link>
      
        <Image
          className="details-image"
          src={currentPiece.imageSource}
          alt="Art Work"
          width={990}
          height={600}
        />
        <StyledDetailsInfoContainer className="styled-details-info-container">
          <StyledDetailsInfoContainer_Headline className="styled-details-info-container_headline">
            <h2>{currentPiece.name}</h2>
            <h3>{currentPiece.artist}</h3>
          </StyledDetailsInfoContainer_Headline>
          <StyledDetailsInfoContainer_Details>
            <StyledDetailsContainer_Details_Category>
              <p>Year:</p>
              <p>Genre:</p>
              <p>Colors:</p>
            </StyledDetailsContainer_Details_Category>
            <StyledDetailsContainer_Details_Value>
              <p>{currentPiece.year}</p>
              <p>{currentPiece.genre}</p>
              {currentPiece.colors.map((color, index) => {
                return <ColorItem key={index} backgroundColor={color} />;
              })}
            </StyledDetailsContainer_Details_Value>
          </StyledDetailsInfoContainer_Details>
        </StyledDetailsInfoContainer>
      </StyledDetailsContainer>
      <StyledDetails_CommentSection>
        <StyledDetails_CommentSection_Headline>
          <StyledDetails_CommentSection_Line />
          <p>Comments</p>
          <StyledDetails_CommentSection_Line />
        </StyledDetails_CommentSection_Headline>
        <CommentForm
          slug={slug}
          onSubmitComment={onSubmitComment}
          className="comment-form"
        />
        {comments?.length > 0 ? <Comments comments={comments} /> : ""}
      </StyledDetails_CommentSection>
    </>
  );
}
