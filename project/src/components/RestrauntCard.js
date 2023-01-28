import {IMG_CLUDINARY_URL } from "../Constants";



const RestrauntCard = (props) => {
  const {cloudinaryImageId,name,cuisines,costForTwoString} = props

    return (
      <div className="p-3 shadow-xl bg-orange-50 w-[250px]">
        <img src={IMG_CLUDINARY_URL+cloudinaryImageId}alt="img" className="mb-4"/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{costForTwoString}</h4>
      </div>
    )
  }


export default RestrauntCard;