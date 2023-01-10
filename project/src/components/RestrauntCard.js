import {IMG_CLUDINARY_URL } from "../Constants";



const RestrauntCard = (props) => {
  const {cloudinaryImageId,name,cuisines,costForTwoString} = props

    return (
      <div className="food-card">
        <img src={IMG_CLUDINARY_URL+cloudinaryImageId}alt="img"/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwoString}</h4>
      </div>
    )
  }


export default RestrauntCard;