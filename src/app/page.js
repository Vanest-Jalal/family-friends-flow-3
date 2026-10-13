import Link from "next/link";
import Logo from "./components/Logo";
import BreedCard from "./components/BreedCard";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";
import { IoIosArrowBack } from "react-icons/io";
import "./globals.css";

export default function ListView() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-sm px-4 pb-24">
        <BottomNavigation />
        <div className="mb-5">
          <SearchBar />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <BreedCard
            image="/dummydog.jpg"
            name="Affenpinscher"
            origin="Northern Germany"
          />

          <BreedCard
            image="/dummydog.jpg"
            name="Afghan Hound"
            origin="Afghanistan"
          />

          <BreedCard
            image="/dummydog.jpg"
            name="Airedale Terrier"
            origin="Yorkshire, England"
          />

          <BreedCard
            image="/dummydog.jpg"
            name="Akbash"
            origin="Western Turkey"
          />

          <BreedCard image="/dummydog.jpg" name="Akita" origin="Japan" />

          <BreedCard
            image="/dummydog.jpg"
            name="Alaskan Malamute"
            origin="Alaska, United States"
          />
        </div>
      </div>

      <IoIosArrowBack />
    </>
  );
}
