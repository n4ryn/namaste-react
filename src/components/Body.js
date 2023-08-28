import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ResCardShimmer from "./ResCardShimmer";
import { RES_LIST } from "../utils/constants";

const Body = () => {
  // State and variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Functions
  const fetchData = async () => {
    const data = await fetch(RES_LIST);
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
        <ResCardShimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurants?.map((row) => (
            <Link key={row?.info?.id} to={`/restaurants/${row?.info?.id}`}>
              <RestaurantCard resData={row?.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
