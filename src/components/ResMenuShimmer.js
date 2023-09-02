const ResMenuShimmer = () => {
  const Shimmer = () => (
    <div className="w-auto h-[10rem] mb-4 rounded-md p-3 flex justify-between items-start gap-6 border border-gray-300 animate-pulse">
      <div className="w-[70%]">
        <div className="mb-4 w-36 h-4 rounded-md bg-gray-300"></div>
        <div className="mb-5 w-20 h-4 rounded-md bg-gray-300"></div>
        <div className="w-auto h-16 rounded-md bg-gray-300"></div>
      </div>

      <div className="flex flex-col w-24 gap-2">
        <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
        <div className="w-24 h-8 rounded-md bg-gray-300"></div>
      </div>
    </div>
  );

  return (
    <div className="mx-5">
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

      <div className="bg-gray-300 h-4 w-32 mb-3 rounded-md animate-pulse"></div>
      <div className="bg-gray-300 h-4 w-24 mb-9 rounded-md animate-pulse"></div>
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  );
};

export default ResMenuShimmer;
