import Favorites from "@/components/Favorites";

export default function FavoritesPage({ artPieces, onToggleFavorite }) {
  return (
    <Favorites onToggleFavorite={onToggleFavorite} artPieces={artPieces} />
  );
}
