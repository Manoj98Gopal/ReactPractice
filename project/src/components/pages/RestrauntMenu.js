import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CLUDINARY_URL } from '../../Constants';
import Shimmer from '../Shimmer';


function RestrauntMenu() {

    const [restroInfo,setreStroInfo] = useState({})

    const params = useParams();

    const {id} = params;

    useEffect(()=>{
        getRestraInfo();
    },[])

    const getRestraInfo = async() =>{

        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9970483&lng=77.61440759999999&menuId="+id)
        const json = await data.json();

        setreStroInfo(json.data)
    }

    console.log("rsadfafsafasfd ==",)


  return Object.keys(restroInfo).length == 0?(<div><Shimmer /></div>):(
    <div className='restraDetail'>

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
        {console.log("menu items =",Object.values(restroInfo?.menu?.items))}
        {Object.values(restroInfo?.menu?.items).map((cur) => (
            <li key={cur.id}>{cur.name}</li>
        ))}
    </ul>
 </div>

    </div>
  )
}

export default RestrauntMenu