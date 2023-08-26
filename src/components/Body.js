import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

// Default Import
import resData from "../utils/mockData";

const Body = () => {
  // // Normal JS variable
  // const listOfRestaurants = []

  // // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([
    ...resData.restaurants,
  ]);

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  const handleResetFilter = () => {
    setListOfRestaurants([...resData.restaurants]);
  };

  return (
    <div className="body">
      <input
        type="text"
        placeholder="Search for restaurants and food"
        className="search-bar"
      />

      <div className="filter">
        <button className="filter-btn" onClick={handleResetFilter}>
          All restaurants
        </button>
        <button className="filter-btn" onClick={handleFilter}>
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((row) => (
          <RestaurantCard
            key={row?.info?.id}
            name={row?.info?.name}
            cuisine={row?.info?.cuisines.join(", ")}
            stars={row?.info?.avgRating}
            delivery={row?.info?.sla?.deliveryTime}
            img={row?.info?.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
