import Image from "next/image";

export function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      className="favorite-button"
      isFavorite={isFavorite}
      onClick={onToggleFavorite}
    >
      {isFavorite ? (
        <Image
          src="/assets/like-icon-true.png"
          alt="Favorite"
          width={50}
          height={50}
          className="favorite-button_image"
        />
      ) : (
        <Image
          src="/assets/like-icon-false.png"
          alt="Favorite"
          width={50}
          height={50}
          className="favorite-button_image"
        />
      )}
    </button>
  );
}
