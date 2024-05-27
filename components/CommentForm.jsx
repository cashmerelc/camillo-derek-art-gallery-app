export function CommentForm({ slug, onSubmitComment }) {
  return (
    <>
      <label htmlFor="add-comment">Add comment:</label>
      <input type="text" id="add-comment" name="add-comment"></input>
      <button
        name="submit-comment"
        onClick={() =>
          onSubmitComment(slug, document.getElementById("add-comment").value)
        }
      >
        Send
      </button>
    </>
  );
}
