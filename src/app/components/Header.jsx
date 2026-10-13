import { IoNotificationsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-5">
      <h1 className="text-base font-bold">FamilyFriends</h1>

      <button
        type="button"
        aria-label="Notifications"
        className="rounded-full p-2 focus-visible:outline-2 focus-visible:outline-pink-500"
      >
        <IoNotificationsOutline size={22} />
      </button>
    </header>
  );
}
