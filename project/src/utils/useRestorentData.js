import React, { useState, useEffect } from "react";
import { FETCH_RESTRO_URL } from "../Constants";

const useRestorentData = (searchTerm) => {
  const [cardInfo, setCardData] = useState([]);

  useEffect(() => {
    getData();
  }, [searchTerm]);

  const getData = async () => {
    let res = await fetch(FETCH_RESTRO_URL);
    let json = await res.json();
    const data = json.data?.cards[2]?.data?.data?.cards;

    setCardData(data);
  };

  return cardInfo;
};

export default useRestorentData;
