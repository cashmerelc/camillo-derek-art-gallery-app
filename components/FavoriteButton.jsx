import Image from "next/image";

export function FavoriteButton(isFavorite, onToggleFavorite) {
  return (
    <button className="favorite-button" onClick={onToggleFavorite}>
      <Image src="../assets/heart.svg" alt="Favorite" width={10} height={10} />
    </button>
  );
}
