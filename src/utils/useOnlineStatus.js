import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Try to check if online or offline
  // boolean value
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
