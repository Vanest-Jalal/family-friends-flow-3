import { IoStar, IoStarOutline } from "react-icons/io5";

export default function FavoriteButton({ isFavorite = false }) {
  return (
    <button
      type="button"
      aria-label={isFavorite ? "Favorite" : "Not favorite"}
      className="focus-visible:outline-coral flex h-8 w-8 items-center justify-center rounded-full bg-white/30 text-white focus-visible:outline-2"
    >
      {isFavorite ? <IoStar size={20} /> : <IoStarOutline size={20} />}
    </button>
  );
}
