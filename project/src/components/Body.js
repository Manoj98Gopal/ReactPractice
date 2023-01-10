import RestrauntCard from "./RestrauntCard";
import { cardData } from "../Constants";

const Body = () => {

    return(
      <div className="food-card-list">
        {cardData.map((curObj) => {
          return <RestrauntCard  {...curObj.data}/>     
        })}
      </div>
    )
  }

  export default Body;