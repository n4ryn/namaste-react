import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // Whenever state variable updates, react trigger a reconciliation cycle(re-render the component)
  console.log("Component Rerender");

  // First the body is rendered the the useEffect is called
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    console.log(data);
    const json = await data?.json();

    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurants?.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  const handleResetFilter = () => {
    setFilteredRestaurants(listOfRestaurants);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants?.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );

    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="search-bar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="filter">
        <button className="filter-btn" onClick={handleResetFilter}>
          All restaurants
        </button>
        <button className="filter-btn" onClick={handleFilter}>
          Top rated restaurants
        </button>
      </div>
      {filteredRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants?.map((row) => (
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
      )}
    </div>
  );
};

export default Body;
