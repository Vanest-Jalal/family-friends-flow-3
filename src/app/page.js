import BreedCard from "./components/BreedCard";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";
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

        <div className="grid grid-cols-2 items-start gap-3">
          {/* Venstre kolonne */}
          <div className="flex min-w-0 flex-col gap-4">
            <BreedCard
              image="/dummydog.jpg"
              name="Affenpinscher"
              origin="Northern Germany"
              height="min-h-[190px]"
              isFavorite={true}
            />

            <BreedCard
              image="/dummydog.jpg"
              name="Airedale Terrier"
              origin="Yorkshire, England"
              height="min-h-[190px]"
            />

            <BreedCard
              image="/dummydog.jpg"
              name="Alaskan Malamute"
              origin="Alaska, United States"
              height="h-[174px]"
            />
          </div>

          {/* Højre kolonne */}
          <div className="flex min-w-0 flex-col gap-4">
            <BreedCard
              image="/dummydog.jpg"
              name="Afghan Hound"
              origin="Afghanistan"
              height="h-[174px]"
            />

            <BreedCard
              image="/dummydog.jpg"
              name="Akbash"
              origin="Western Turkey"
              height="min-h-[190px]"
            />

            <BreedCard
              image="/dummydog.jpg"
              name="Akita"
              origin="Japan"
              height="min-h-[190px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
