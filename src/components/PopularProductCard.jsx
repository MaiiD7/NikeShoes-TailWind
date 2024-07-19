import { star } from "../assets/icons";
import ShoeCard from "./ShoeCard";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[260px] h-[260px] cursor-pointer"
      />
      <div className="mt-6 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={22} height={22} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-1 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-1 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
