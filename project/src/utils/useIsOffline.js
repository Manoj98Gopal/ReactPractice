import { useEffect, useState } from "react";

const useIsOffline = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const data = window.navigator.onLine;

    if (data) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }

    console.log("custom hooks", data);
  }, [isOnline]);

  return isOnline;
};

export default useIsOffline;
