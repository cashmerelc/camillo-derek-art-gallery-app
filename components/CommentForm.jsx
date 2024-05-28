import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

// export function CommentForm({ slug, onSubmitComment }) {
//   return (
//     <StyledFormDiv>
//       <label htmlFor="add-comment">Add comment:</label>
//       <input type="text" id="add-comment" name="add-comment"></input>
//       <button
//         name="submit-comment"
//         onClick={() =>
//           onSubmitComment(slug, document.getElementById("add-comment").value)
//         }
//       >
//         Send
//       </button>
//     </StyledFormDiv>
//   );
// }

export function CommentForm({ slug, onSubmitComment }) {
  return (
    <StyledFormDiv>
      <label htmlFor="add-comment">Add comment:</label>
      <textarea
        type="text"
        id="add-comment"
        name="add-comment"
        placeholder="Add a Comment..."
        rows="5"
      ></textarea>
      <button
        className="submit-button"
        name="submit-comment"
        onClick={() => {
          if (document.getElementById("add-comment").value === "") {
            alert("Comment input cannot be empty");
          } else {
            onSubmitComment(slug, document.getElementById("add-comment").value);
            document.getElementById("add-comment").value = "";
          }
        }}
      >
        Send
      </button>
    </StyledFormDiv>
  );
}
