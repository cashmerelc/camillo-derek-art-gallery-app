import Link from "next/link";

export function ArtPiecePreview({ image, title, artist }) {
  console.log(image, title, artist);
  return (
    <>
      <div className="art-piece-image-container">
        <img src={image} />
        <button className="favorite-button">❤️</button>
      </div>

      <h2>
        "{title}" by {artist}
      </h2>
    </>
  );
}
