import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";






const Body = () => {

  const [listOfRestaurants , setListOfResturant]=useState(resList);

  useEffect(()=>{
    fetchData();

  },[])

  const fetchData=async ()=>{
    const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.770278&lng=87.487325&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  
  const json= await data.json();


  console.log(json); 

    setListOfResturant

  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{

        
          let filteredList=listOfRestaurants.filter(
            (res) =>res.info.avgRating > 4
          );
          setListOfResturant(filteredList)
          // console.log(listOfRestaurants);

        }}>Top Rated Restaurants</button>
        
        </div>
      <div className="res-container">

        {listOfRestaurants.map((restaurant) => (<ResturantCard key={restaurant.info.id} resData={restaurant}/>))}

      </div>
    </div>
  );
};
export default Body;