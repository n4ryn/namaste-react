// Named import
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisine, stars, delivery, img } = props;

  return (
    <div className="res-card">
      <img src={CDN_URL + img} className="res-logo" />
      <h3>{name}</h3>
      <h4>{stars} ⭐️</h4>
      <br />
      <h5
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {cuisine}
      </h5>
      <h5>{delivery} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
