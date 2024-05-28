import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export function CommentForm({ slug, onSubmitComment }) {
  return (
    <StyledFormDiv>
      <label htmlFor="add-comment">Add comment:</label>
      <textarea
        type="text"
        id="add-comment"
        name="add-comment"
        placeholder="Add a Comment..."
      ></textarea>
      <button
        className="submit-button"
        name="submit-comment"
        onClick={() => {
          const commentField = document.getElementById("add-comment");
          onSubmitComment(slug, commentField.value);
          commentField.value = "";
        }}
      >
        Send
      </button>
    </StyledFormDiv>
  );
}
