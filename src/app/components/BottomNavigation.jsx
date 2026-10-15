import Link from "next/link";
import {
  IoHomeOutline,
  IoStarOutline,
  IoChatbubbleOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function BottomNavigation({ active = "home" }) {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-sm -translate-x-1/2 justify-around rounded-t-2xl bg-white px-4 py-4 shadow-lg"
    >
      <Link
        href="/"
        aria-label="Home"
        aria-current={active === "home" ? "page" : undefined}
        className="focus-visible:outline-coral rounded-full p-1 focus-visible:outline-2"
      >
        <IoHomeOutline
          size={24}
          className={active === "home" ? "text-coral" : "text-gray-400"}
        />
      </Link>

      <span aria-label="Favorites">
        <IoStarOutline
          size={24}
          className={active === "favorites" ? "text-coral" : "text-gray-400"}
        />
      </span>

      <span aria-label="Messages">
        <IoChatbubbleOutline size={24} className="text-gray-400" />
      </span>

      <span aria-label="Profile">
        <IoPersonOutline size={24} className="text-gray-400" />
      </span>
    </nav>
  );
}
