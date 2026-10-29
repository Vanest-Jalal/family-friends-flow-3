import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";
import BreedList from "./components/BreedList";

export default async function ListView({ searchParams }) {
  const params = await searchParams;
  const search = params.search || "";

  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-sm px-4 pb-24">
        <div className="mb-5">
          <SearchBar />
        </div>

        <BreedList search={search} />
      </main>

      <BottomNavigation />
    </>
  );
}
