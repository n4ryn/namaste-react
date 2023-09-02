import { useParams } from "react-router-dom";

import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResMenuShimmer from "./ResMenuShimmer";

const RestaurantMenu = () => {
  // State and variables
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null)
    return (
      <div className="body">
        <ResMenuShimmer />
      </div>
    );

  // const va = false;
  const va = true;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
    veg,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const recommendedItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
      (row) => row?.card?.card?.title === "Recommended"
    );

  const { itemCards, title } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
      recommendedItems?.indexOf(true)
    ]?.card?.card;

  return va ? (
    <div className="mx-5">
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
            <span>{veg ? "🟢" : "🔴"}</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      <div className="">
        <p className="uppercase font-semibold mb-1">{title}</p>
        <p className="uppercase mb-8">{itemCards?.length} items</p>
        <div>
          {itemCards?.map((row) => (
            <div
              className="mb-4 rounded-md p-3 flex justify-between items-start gap-6 border-b-2 border-r border-orange-300"
              key={row?.card?.info?.id}
            >
              <div className="w-[70%]">
                <p className="mb-2 font-semibold">{row?.card?.info?.name}</p>
                <p className="text-sm mb-3">
                  ₹{" "}
                  {row?.card?.info?.price / 100 ||
                    row?.card?.info?.defaultPrice / 100}
                </p>
                <p className="text-xs">{row?.card?.info?.description}</p>
              </div>

              <div className="flex flex-col w-24 gap-2">
                <img
                  src={CDN_URL + row?.card?.info?.imageId}
                  className="w-24 h-24 rounded-md"
                />
                <button className="bg-orange-400 text-white py-1 rounded-md hover:drop-shadow-md">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <ResMenuShimmer />
  );
};

export default RestaurantMenu;
