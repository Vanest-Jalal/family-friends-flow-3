import { IoNotificationsOutline } from "react-icons/io5";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-sm items-center justify-between px-4 py-5">
      <Logo />

      <button
        type="button"
        aria-label="Notifications"
        className="focus-visible:outline-coral rounded-full p-2 focus-visible:outline-2"
      >
        <IoNotificationsOutline size={24} />
      </button>
    </header>
  );
}
