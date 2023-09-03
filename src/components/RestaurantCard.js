import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // State and variables
  const { resData } = props;
  const { name, areaName, veg, cuisines, avgRating, sla, cloudinaryImageId } =
    resData;

  return (
    <div className="w-52 p-2.5 rounded-md border-orange-400 border hover:scale-[97%] transition-all">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="rounded-md h-36 w-48 object-cover mb-2"
      />
      <h3 className="font-bold overflow-hidden whitespace-nowrap text-ellipsis text-lg">
        {name}
      </h3>
      <h5 className="font-bold text-sm mb-2">{areaName}</h5>
      <p className="overflow-hidden whitespace-nowrap text-ellipsis text-sm">
        {cuisines?.join(", ")}
      </p>

      <br />

      <div className="flex justify-center items-center gap-7">
        <span
          className={`px-2 py-0.5 rounded-md ${
            avgRating >= 4 ? "bg-green-200" : "bg-yellow-100"
          }`}
        >
          ⭐️ {avgRating}
        </span>
        <span>{veg ? "🟢" : "🔺"}</span>
        <span>{sla?.deliveryTime} min</span>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="hover:scale-[97%] transition-all">
        <label className="absolute bg-black text-white text-xs p-1 z-10 m-[-5] rounded-sm uppercase tracking-widest">
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
