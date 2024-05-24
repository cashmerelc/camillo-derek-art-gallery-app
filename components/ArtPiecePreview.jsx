import Image from "next/image";

export function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <div className="art-piece-image-container">
        <Image src={image} alt={title} width={200} height={200} />
        <button className="favorite-button">
          <Image
            src="../assets/heart.svg"
            alt="Favorite"
            width={10}
            height={10}
          />
        </button>
      </div>

      <h2>
        &quot;{title}&quot; by {artist}
      </h2>
    </>
  );
}
