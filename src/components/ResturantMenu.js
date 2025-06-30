import { useEffect ,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_API_URL } from "../../utils/constants.js";

const ResturantMenu = () => {

  const[resInfo,setResInfo]=useState(null);
  // const params= useParams();
// console.log("params is " + params);

  const { resId }  = useParams();
  console.log("resId is " + resId);

  useEffect(() => {
    fetchMenu();
    console.log("useEffect called in ResturantMenu");

}, []);

const fetchMenu = async () => {
  const data=await fetch(RESTAURANT_API_URL + resId);




const json=await data.json();
console.log("below is the json data");
console.log(json);
console.log(json?.data?.cards[0]?.card?.card?.text);
setResInfo(json?.data);
}

// const {text} = resInfo?.cards[0]?.card?.card;
// console.log(text);
const name = resInfo?.cards?.[0]?.card?.card?.text;
const rating =resInfo?.cards?.[2]?.card?.card?.info?.avgRatingString;
const deliveyTime=resInfo?.cards?.[2]?.card?.card?.info?.sla?.minDeliveryTime;
const costForTwo=resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
const cuisines=resInfo?.cards?.[2]?.card?.card?.info?.cuisines.join(", ");

const itemCards =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

// const itemCards2 =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
console.log(itemCards);
// console.log(itemCards2?.[0]?.dish?.info?.name);

// console.log(itemCards2[0]?.dish?.info?.name);

console.log("itemCards");
console.log(itemCards);
console.log(itemCards?.[0]?.card?.info?.name);

// const menuItems=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel?.[0]?.dish?.info?.name;
// console.log(menuItems)

console.log(name,rating,deliveyTime)


console.log(resInfo?.cards[0]?.card?.card?.text);


  return ((resInfo === null) ? (
    <Shimmer />):

    <div className="restaurant-menu">
      <h1>  {name}  </h1>
      <h3>{cuisines}</h3>

      <h3> {rating} stars rated </h3>
      <h3> {deliveyTime} minutes delivery</h3>
      <h3> {costForTwo} </h3>

      
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item,index)=>{
          return <li key={index}>{item.card.info.name}-{ "Rs" + item.card.info.defaultPrice/100}</li>
        })}
      </ul>

     
    </div>
  );
}

export default ResturantMenu;
