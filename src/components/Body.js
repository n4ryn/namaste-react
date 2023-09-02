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

  const handleTopResFilter = () => {
    const filteredList = listOfRestaurants?.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  const handleVegResFilter = () => {
    const filteredList = listOfRestaurants?.filter((res) => res?.info?.veg);
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
    <div className="min-h-[calc(100vh_-_152px)]">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for restaurants"
          className="py-2 px-3 w-64 mr-4 text-sm border border-orange-400 focus:outline-none focus:drop-shadow-md rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />

        <button
          className="py-2 bg-orange-400 hover:drop-shadow-md text-sm text-white px-6 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex justify-center items-center my-4">
        <button
          className="mx-2 text-xs bg-orange-400 hover:drop-shadow-md text-white px-3 py-1 rounded-md"
          onClick={handleResetFilter}
        >
          All restaurants
        </button>

        <button
          className="mx-2 text-xs bg-orange-400 hover:drop-shadow-md text-white px-3 py-1 rounded-md"
          onClick={handleTopResFilter}
        >
          Top rated restaurants
        </button>

        <button
          className="mx-2 text-xs bg-orange-400 hover:drop-shadow-md text-white px-3 py-1 rounded-md"
          onClick={handleVegResFilter}
        >
          Veg restaurants
        </button>
      </div>

      {filteredRestaurants?.length === 0 ? (
        <ResCardShimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-6 px-2">
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
