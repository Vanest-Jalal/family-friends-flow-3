import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import TraitBadge from "../../components/TraitBadge";
import BottomNavigation from "../../components/BottomNavigation";
import { IoChevronBack } from "react-icons/io5";

export default function DetailView() {
  return (
    <main className="mx-auto max-w-sm px-4 pb-24">
      <Header />

      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src="/dummydog.jpg"
          width={400}
          height={500}
          alt="Affenpinscher"
          className="h-[350px] w-full object-cover"
        />

        <Link
          href="/"
          aria-label="Back to home"
          className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white"
        >
          <IoChevronBack size={20} />
        </Link>

        <div className="absolute top-4 right-4">
          <FavoriteButton isFavorite={true} />
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-white/20 px-2 py-2 text-white backdrop-blur-sm">
          <Image
            src="/dummydog.jpg"
            width={32}
            height={32}
            alt=""
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="text-xs">Affenpinscher</span>
        </div>
      </div>

      <h1 className="mt-5 text-2xl font-bold">Affenpinscher</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        <TraitBadge
          label="Confident"
          color="bg-trait-blue"
          textColor="text-trait-text"
        />
        <TraitBadge
          label="Alert"
          color="bg-trait-pink"
          textColor="text-trait-text"
        />
        <TraitBadge
          label="Playful"
          color="bg-trait-green"
          textColor="text-trait-text"
        />
        <TraitBadge
          label="Loyal"
          color="bg-trait-yellow"
          textColor="text-trait-text-yellow"
        />
      </div>

      <section className="mt-6">
        <h2 className="mb-1 text-sm text-gray-400">Breed description</h2>

        <p className="text-sm leading-relaxed text-gray-600">
          Small, sturdy toy breed with a distinctive monkey-like expression and
          shaggy, wiry coat. Known for its confident, terrier-like personality
          despite its small size.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="mb-1 text-sm text-gray-400">Breed history</h2>

        <p className="text-sm leading-relaxed text-gray-600">
          Originating in Germany, the Affenpinscher was originally bred to hunt
          rats. Today, it is known as a playful and loyal companion dog.
        </p>
      </section>
      <BottomNavigation active="favorites" />
    </main>
  );
}
