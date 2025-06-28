import ResturantCard from "./ResturantCard";
// import resList from "../../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
 import Shimmer from "./Shimmer";





const Body = () => {

  const [listOfRestaurants , setListOfResturant]=useState([]);


  const [searchText, setSearchText] = useState("");

  const [filteredResturant, setFilteredResturant] = useState([]);

  console.log("Body Rendered");

  useEffect(()=>{
    fetchData();

  },[])

  const fetchData=async ()=>{
    const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.770278&lng=87.487325&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  
  const json= await data.json();


  console.log(json); 

  console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfResturant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResturant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  return listOfRestaurants.length === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search">
      <input type="text"className="search-box" value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);
      }}/>
      <button onClick={()=>{
        //we want to filter the resturants cards and update the UI
        console.log(searchText);

      const filteredResturant = listOfRestaurants.filter((res) => (res.info.name.toLowerCase()).includes(searchText.toLowerCase()));
        if(filteredResturant.length === 0){
          console.log("No Resturant Found");
          alert("No Resturant Found");
          setFilteredResturant(listOfRestaurants);
          return;

        }
      setFilteredResturant(filteredResturant);
      console.log(filteredResturant);



      }}>Search</button>



        </div>
        <button className="filter-btn" onClick={()=>{

        
          let filteredList=listOfRestaurants.filter(
            (res) =>res.info.avgRating > 4
          );
          setListOfResturant(filteredList)
          // console.log(listOfRestaurants);

        }}>Top Rated Restaurants</button>
        
        </div>
      <div className="res-container">

        {filteredResturant.map((restaurant) => (<ResturantCard key={restaurant.info.id} resData={restaurant}/>))}

      </div>
    </div>
  );
};
export default Body;