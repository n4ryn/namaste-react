import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // State and variables
  const { resData } = props;
  const { name, areaName, veg, cuisines, avgRating, sla, cloudinaryImageId } =
    resData;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-logo" />
      <h3
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          marginBottom: "3px",
        }}
      >
        {name}
      </h3>
      <h5>{areaName}</h5>
      <p
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          marginTop: "2px",
        }}
      >
        {cuisines?.join(", ")}
      </p>

      <br />

      <div className="res-meta">
        <span className={avgRating >= 4 ? "stars-high" : "stars-low"}>
          ⭐️ {avgRating}
        </span>
        <span>{veg ? "🟢" : "🔴"}</span>
        <span>{sla?.deliveryTime} min</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
