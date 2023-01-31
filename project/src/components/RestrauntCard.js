import {IMG_CLUDINARY_URL } from "../Constants";
import React,{useContext} from "react";
import Context from "../utils/Context";


const RestrauntCard = (props) => {
  const {cloudinaryImageId,name,cuisines,costForTwoString} = props

  const {user} = useContext(Context);

    return (
      <div className="p-3 shadow-xl bg-orange-50 w-[250px]">
        <img src={IMG_CLUDINARY_URL+cloudinaryImageId}alt="img" className="mb-4"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{costForTwoString}</h4>
        <h3 className="font-bold">{user.name}</h3>
        <h3 className="font-bold">{user.email}</h3>

      </div>
    )
  }


export default RestrauntCard;