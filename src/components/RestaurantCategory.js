import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className={`w-full lg:w-9/12 my-4 p-4 m-auto shadow-md rounded-md ${
          showItems && "shadow-none"
        }`}
      >
        {/* Accordion Header */}
        <div
          className={`flex justify-between cursor-pointer ${
            showItems && "pb-3 border-b-2 border-gray-400"
          }`}
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
