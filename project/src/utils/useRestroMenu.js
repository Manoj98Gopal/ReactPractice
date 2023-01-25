import React, { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";

const useRestroMenu = (id) => {
  const [restroInfo, setreStroInfo] = useState({});

  console.log("fetch data ===", FETCH_MENU_URL);

  useEffect(() => {
    getRestraInfo();
  }, []);

  const getRestraInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();

    setreStroInfo(json.data);
  };

  return restroInfo;
};

export default useRestroMenu;
