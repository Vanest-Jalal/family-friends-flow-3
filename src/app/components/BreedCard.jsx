import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const BreedCard = ({ image, name, origin, height, isFavorite = false }) => {
  return (
    <div className={`breed-card relative ${height}`}>
      <Link
        href="/detailview"
        className="focus-visible:outline-coral block rounded-xl focus-visible:outline-2"
      >
        <Image
          src={image}
          width={400}
          height={400}
          alt={name}
          loading="eager"
          className="aspect-[160/114] w-full rounded-2xl object-cover"
        />

        <div className="px-3 py-2">
          <h3 className="text-[15px] leading-tight font-bold">{name}</h3>
          <p className="mt-1 text-xs leading-[120%] font-medium text-black/40">
            {origin}
          </p>
        </div>
      </Link>

      <div className="absolute top-2 right-2">
        <FavoriteButton isFavorite={isFavorite} />
      </div>
    </div>
  );
};

export default BreedCard;
