import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Search"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4938F] text-white"
      >
        <IoSearchOutline size={24} />
      </button>

      <input
        type="search"
        placeholder="search breeds"
        aria-label="Search breeds"
        className="h-12 min-w-0 flex-1 rounded-full border border-gray-200 px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#F4938F]"
      />
    </div>
  );
}
