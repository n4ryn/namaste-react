const ResCardShimmer = () => {
  const Shimmer = () => (
    <div className="w-52 h-[18.8rem] p-2.5 rounded-md border border-gray-300 animate-pulse">
      <div className="rounded-md h-36 w-46 mb-4 bg-gray-300"></div>
      <div className="rounded-md h-9 w-46 mb-3 bg-gray-300"></div>
      <div className="rounded-md h-5 w-46 mb-5 bg-gray-300"></div>
      <div className="rounded-md h-7 w-46 bg-gray-300"></div>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-6 px-2">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  );
};

export default ResCardShimmer;
