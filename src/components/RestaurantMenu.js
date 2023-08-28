import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ResCardShimmer from "./ResCardShimmer";
import { CDN_URL, MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  // State and variables
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  // Functions
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json);
  };

  if (resInfo === null)
    return (
      <div className="body">
        <ResCardShimmer />
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

  const recommendedItems =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
      (row) => row?.card?.card?.title === "Recommended"
    );

  const { itemCards, title } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
      recommendedItems?.indexOf(true)
    ]?.card?.card;

  return (
    <div className="body menu">
      <div className="res-menu-card">
        <img src={CDN_URL + cloudinaryImageId} className="res-logo" />

        <div className="res-menu-desc">
          <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
          </div>

          <div className="res-menu-meta">
            <span className={avgRating >= 4 ? "stars-high" : "stars-low"}>
              ⭐️ {avgRating}
            </span>
            <span>{veg ? "🟢" : "🔴"}</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
      </div>

      <div style={{ margin: 20 }}>
        <h2>{title}</h2>
        <p style={{ margin: "6px 0 30px", textTransform: "uppercase" }}>
          {itemCards?.length} items
        </p>

        <>
          {itemCards?.map((row) => (
            <div className="menu-items" key={row?.card?.info?.id}>
              <div>
                <h4 style={{ marginBottom: 6 }}>{row?.card?.info?.name}</h4>
                <p>
                  ₹
                  {row?.card?.info?.price / 100 ||
                    row?.card?.info?.defaultPrice / 100}
                </p>
                <br />
                <p
                  style={{
                    fontSize: 14,
                  }}
                >
                  {row?.card?.info?.description}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={CDN_URL + row?.card?.info?.imageId}
                  style={{
                    height: 100,
                    borderRadius: 10,
                    width: 119,
                  }}
                />
                <button className="add-btn">Add</button>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default RestaurantMenu;
