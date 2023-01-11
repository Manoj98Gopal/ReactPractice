import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { cardData } from "../Constants";

const Body = () => {
  const [search, setSearch] = useState("");
  const [cardInfo, setCardData] = useState(cardData);

  return (
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
        <button
          onClick={() => {
            const data = filterFunction(search, cardInfo);
            setCardData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="food-card-list">
        {cardData
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
            return <RestrauntCard {...curObj.data} key={curObj.data.id} />;
          })}
      </div>
    </div>
  );
};

export default Body;
