import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterFunction } from "../utils/Filter";
import useRestorentData from "../utils/useRestorentData";
import useIsOffline from "../utils/useIsOffline";

const Body = () => {
  const [search, setSearch] = useState("");

  const cardInfo = useRestorentData(search);

  const status = useIsOffline();

  if (!status) {
    return <h1>Please check your Internet</h1>;
  }

  return cardInfo.length === 0 ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div>
      <div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search here ...."
          className="searchBar"
        />
      </div>
      <div className="food-card-list">
        {cardInfo
          .filter((cur) => {
            if (search == "") {
              return cur;
            } else if (
              cur.data.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return cur;
            }
          })
          .map((curObj) => {
            return (
              <Link to={"/restra/" + curObj.data.id} key={curObj.data.id}>
                <RestrauntCard {...curObj.data} />
              </Link>
            );
          })}
      </div>
      {/* <div className="food-card-list">
          {filterCard.map((cur) => {
            console.log(cur)
          return  <Link  to={"/restra/"+cur.data.id}   key ={cur.data.id}><RestrauntCard   {...cur.data}  /></Link>
          })}
      </div> */}
    </div>
  );
};

export default Body;
