import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";


const filterFunction = (term,array) => {


  const filterCard = array.filter((cur) => cur?.data?.name?.toLocaleLowerCase().includes(term.toLocaleLowerCase()));

  return filterCard;


}




const Body = () => {
  const [search, setSearch] = useState("");
  const [cardInfo, setCardData] = useState([]);
  const [filterCard,setFilterCard] = useState([]);


  useEffect(()=>{

    getData();

  },[])

    const getData = async()=>{

      let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9970483&lng=77.61440759999999&page_type=DESKTOP_WEB_LISTING")
      let json = await res.json();
      const data = json.data?.cards[2]?.data?.data?.cards

      setCardData(data)
      setFilterCard(data)
  
    }

  return filterCard.length === 0?(<div><Shimmer /></div>):(
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
            setFilterCard(data);
          }}
        >
          Search
        </button>
      </div>
      {/* <div className="food-card-list">
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
      </div> */}
      <div className="food-card-list">

          {filterCard.map((cur) => {
            console.log(cur)
          return  <RestrauntCard   {...cur.data}  key ={cur.data.id}/>
          })}

      </div>
    </div>
  );
};

export default Body;
