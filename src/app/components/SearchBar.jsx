import Form from "next/form";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <Form action="/" className="flex items-center gap-3">
      <button
        type="submit"
        aria-label="Search"
        className="bg-coral focus-visible:outline-coral flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <IoSearchOutline size={24} className="-scale-x-100" />
      </button>

      <input
        type="search"
        name="search"
        placeholder="search breeds"
        aria-label="Search breeds"
        className="focus-visible:ring-coral h-12 min-w-0 flex-1 rounded-full border border-gray-200 px-4 text-sm outline-none focus-visible:ring-2"
      />
    </Form>
  );
}
