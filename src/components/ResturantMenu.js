import { useEffect } from "react";


const ResturantMenu = () => {

  useEffect(() => {
    fetchMenu();
    console.log("useEffect called in ResturantMenu");

}, []);

const fetchMenu = async () => {
  const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.770278&lng=87.487325&restaurantId=397777&catalog_qa=undefined&submitAction=ENTER");


const json=await data.json();
console.log(json);
}

  return (
    <div className="restaurant-menu">
      <h1>Name of the Resturant</h1>
      
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>DietCode</li>
      </ul>

     
    </div>
  );
}

export default ResturantMenu;
