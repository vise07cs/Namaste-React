import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useState } from "react";







const Body = () => {

  const [listOfRestaurants , setListOfResturant]=useState(resList);
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