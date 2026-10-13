import {
  IoHomeOutline,
  IoStarOutline,
  IoChatbubbleOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function BottomNavigation() {
  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-sm -translate-x-1/2 justify-around rounded-t-2xl bg-white px-4 py-4 shadow-lg"
    >
      <IoHomeOutline size={24} className="text-[#F4938F]" />
      <IoStarOutline size={24} className="text-gray-400" />
      <IoChatbubbleOutline size={24} className="text-gray-400" />
      <IoPersonOutline size={24} className="text-gray-400" />
    </nav>
  );
}
