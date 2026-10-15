import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-[9px]">
      <button
        type="button"
        aria-label="Search"
        className="bg-coral focus-visible:outline-coral flex h-[52px] w-[50px] shrink-0 items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <IoSearchOutline size={24} className="-scale-x-100" />
      </button>

      <input
        type="search"
        placeholder="search breeds"
        aria-label="Search breeds"
        className="focus-visible:ring-coral h-[52px] min-w-0 flex-1 rounded-full border border-gray-200 px-4 text-sm outline-none focus-visible:ring-2"
      />
    </div>
  );
}
