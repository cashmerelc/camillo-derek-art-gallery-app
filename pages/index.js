import { Spotlight } from "../components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Spotlight
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      isFavorite={isFavorite}
    />
  );
}
