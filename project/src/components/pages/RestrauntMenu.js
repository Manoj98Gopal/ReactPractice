import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CLUDINARY_URL } from "../../Constants";
import useRestroMenu from "../../utils/useRestroMenu";
import Shimmer from "../Shimmer";
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../../utils/cartSlice";


function RestrauntMenu() {
  const params = useParams();
  const restroInfo = useRestroMenu(params.id);

  const disptch = useDispatch();

  const handleItem = (name) => {
        disptch(addItem(name))
  }

  return Object.keys(restroInfo).length == 0 ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div className="flex">
      <div>
        <h3>Restraunt id {params.id}</h3>
        <h2>{restroInfo?.name}</h2>
        <img src={IMG_CLUDINARY_URL + restroInfo.cloudinaryImageId} />
        <h4>{restroInfo?.city}</h4>
        <h4>{restroInfo?.locality}</h4>
        <h4>{restroInfo?.area}</h4>
        <h4>AVG rating : {restroInfo?.avgRatingString}</h4>
        <h3>{restroInfo?.costForTwoMsg}</h3>
      </div>
      <div>
        <h2>Menus </h2>
        <ul>
          {Object.values(restroInfo?.menu?.items).map((cur) => (
          <li key={cur.id}>{cur.name}<button  onClick={() => handleItem(cur.name)} className="p-2 m-2 bg-green-600 rounded-lg">Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestrauntMenu;
