import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

const BreedCard = ({ image, name, origin }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={name}
          className="h-32 w-full object-cover"
        />

        <div className="absolute top-2 right-2">
          <FavoriteButton />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{origin}</p>
      </div>
    </div>
  );
};

export default BreedCard;
