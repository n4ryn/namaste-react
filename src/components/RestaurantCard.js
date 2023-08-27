// Named import
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisine, stars, delivery, img } = props;

  return (
    <div className="res-card">
      <img src={CDN_URL + img} className="res-logo" />
      <h3
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </h3>
      <h3 className={stars >= 4 ? "stars-high" : "stars-low"}>{stars} ⭐️</h3>

      <br />

      <p
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {cuisine}
      </p>
      <p>{delivery} minutes</p>
    </div>
  );
};

export default RestaurantCard;
