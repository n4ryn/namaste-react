import { useEffect, useState } from "react";

import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // Fetch Data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data?.json();

    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
