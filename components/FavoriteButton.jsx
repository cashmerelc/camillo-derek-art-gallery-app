import Image from "next/image";

export function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button
      className="favorite-button"
      isFavorite={isFavorite}
      onClick={onToggleFavorite}
    >
      <Image src="../assets/heart.svg" alt="Favorite" width={20} height={20} />
    </button>
  );
}
