export function Comments({ comments }) {
  return (
    <ul>
      <h2>Comments:</h2>
      {comments.map((comment, index) => {
        return <li key={index}>{comment}</li>;
      })}
    </ul>
  );
}
