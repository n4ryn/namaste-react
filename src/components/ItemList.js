import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between my-3 p-2 border-b-2 border-gray-300"
        >
          <div className="w-[80%]">
            <p className="font-bold text-sm">{item?.card?.info?.name}</p>{" "}
            <p className="font-semibold text-sm mb-3">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="flex flex-col">
            {item?.card?.info?.imageId && (
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-24 h-24 rounded-md"
              />
            )}
            {item?.card?.info?.imageId ? (
              <div className="absolute">
                <button className="bg-black text-white py-1 p-5 rounded-md mx-[7] mt-[60]">
                  Add +
                </button>
              </div>
            ) : (
              <button className="bg-black text-white py-1 p-5 rounded-md mx-[7] my-auto">
                Add +
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
