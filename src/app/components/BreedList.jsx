import BreedCard from "./BreedCard";

const breeds = [
  {
    name: "Affenpinscher",
    origin: "Northern Germany",
    image: "/dummydog.jpg",
    height: "min-h-[190px]",
    isFavorite: true,
  },
  {
    name: "Afghan Hound",
    origin: "Afghanistan",
    image: "/dummydog.jpg",
    height: "min-h-[174px]",
  },
  {
    name: "Airedale Terrier",
    origin: "Yorkshire, England",
    image: "/dummydog.jpg",
    height: "min-h-[190px]",
  },
  {
    name: "Akbash",
    origin: "Western Turkey",
    image: "/dummydog.jpg",
    height: "min-h-[190px]",
  },
  {
    name: "Alaskan Malamute",
    origin: "Alaska, United States",
    image: "/dummydog.jpg",
    height: "min-h-[174px]",
  },
  {
    name: "Akita",
    origin: "Japan",
    image: "/dummydog.jpg",
    height: "min-h-[190px]",
  },
];

export default function BreedList({ search = "" }) {
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase().trim()),
  );

  // Beholder de to kolonner fra Figma
  const leftColumn = filteredBreeds.filter((_, index) => index % 2 === 0);
  const rightColumn = filteredBreeds.filter((_, index) => index % 2 !== 0);

  if (filteredBreeds.length === 0) {
    return <p className="text-center text-gray-500">No breeds found.</p>;
  }

  return (
    <div className="grid grid-cols-2 items-start gap-3">
      {[leftColumn, rightColumn].map((column, index) => (
        <div key={index} className="flex min-w-0 flex-col gap-4">
          {column.map((breed) => (
            <BreedCard key={breed.name} {...breed} />
          ))}
        </div>
      ))}
    </div>
  );
}
