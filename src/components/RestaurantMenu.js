import { useState } from "react";
import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResMenuShimmer from "./ResMenuShimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // State and variables
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null)
    return (
      <div className="body">
        <ResMenuShimmer />
      </div>
    );

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
    veg,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mx-5 min-h-[calc(100vh_-_152px)]">
      <div className="h-36 flex justify-start mb-8 gap-8 sm:gap-14">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="rounded-md h-36 w-48 object-cover mb-2"
        />

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xl font-bold mb-3">{name}</p>
            <p>{cuisines.join(", ")}</p>
          </div>

          <div className="w-60 flex justify-between">
            <span
              className={`px-2 py-0.5 rounded-md ${
                avgRating >= 4 ? "bg-green-200" : "bg-yellow-100"
              }`}
            >
              ⭐️ {avgRating}
            </span>
            <span>{veg ? "🟢" : "🔺"}</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      {/* Categories Accordion */}
      {categories?.map((category, index) => (
        // Controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
