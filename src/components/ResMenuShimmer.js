const ResMenuShimmer = () => {
  const Shimmer = () => (
    <div className="w-auto h-[3.3rem] mb-4 rounded-md p-4 flex justify-between items-start gap-6 border border-gray-300 animate-pulse">
      <div className="w-56 h-4 rounded-md bg-gray-300"></div>
      <div className="w-4 h-4 rounded-md bg-gray-300"></div>
    </div>
  );

  return (
    <div className="mx-5 min-h-[calc(100vh_-_152px)]">
      <div className="h-36 flex justify-start mb-9 gap-8 sm:gap-14">
        <div className="bg-gray-300 rounded-md h-36 w-48 animate-pulse"></div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="bg-gray-300 h-6 w-52 mb-5 rounded-md animate-pulse"></div>
            <div className="bg-gray-300 h-5 w-64 rounded-md animate-pulse"></div>
          </div>

          <div className="bg-gray-300 h-6 w-64 rounded-md animate-pulse"></div>
        </div>
      </div>
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

export default ResMenuShimmer;
