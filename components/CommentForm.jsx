import styled from "styled-components";

const StyledFormDiv = styled.div`
  margin-bottom: 125px;
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
      <input type="text" id="add-comment" name="add-comment"></input>
      <button
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
