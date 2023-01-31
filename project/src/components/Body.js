import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterFunction } from "../utils/Filter";
import useRestorentData from "../utils/useRestorentData";
import useIsOffline from "../utils/useIsOffline";
import Context from "../utils/Context";

const Body = () => {
  const [search, setSearch] = useState("");

  const cardInfo = useRestorentData(search);

  const status = useIsOffline();

  const {user,setUser} = useContext(Context);

  console.log("user =",user)

  if (!status) {
    return <h1>Please check your Internet</h1>;
  }

  return cardInfo.length === 0 ? (
    <div>
      <Shimmer />
    </div>
  ) : (
    <div>
      <div className="flex justify-center">

      <input
          className="p-2 m-1 w-96 bg-slate-100 rounded-lg"
          placeholder="Enter your name."
          value={user.name}
          onChange={(e) => setUser({
            ...user,
            name:e.target.value
          })}
            
          
        />
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search here ...."
          className="p-3 m-1 w-96 bg-slate-100 rounded-2xl"
        />

        <input
        className="p-2 m-1 w-96 bg-slate-100 rounded-lg"
        placeholder="Enter your email."
          value={user.email}
          onChange={(e) => setUser({
            ...user,
            email:e.target.value
          })}
      />

      </div>
      <div className="flex gap-5 flex-wrap p-4">
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
