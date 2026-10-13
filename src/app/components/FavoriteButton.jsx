import { IoStarOutline } from "react-icons/io5";

export default function FavoriteButton() {
  return (
    <button
      type="button"
      aria-label="Add to favorites"
      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/40 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
    >
      <IoStarOutline size={18} />
    </button>
  );
}
