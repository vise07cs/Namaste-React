import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://images-platform.99static.com/PqkxPzdIGHYlwJzMzFSLbWCaI0g=/0x0:1181x1181/500x500/top/smart/99designs-contests-attachments/134/134197/attachment_134197839" alt="logo" />
        
      </div>


      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact us </li>
          <li className="nav-item">Cart</li>

        </ul>

      </div>
      </div>
    
  )
}

const ResturantCard=(props)=>{
  const {resData}=props;
  console.log(props);
  return (
    <div className="res-card">
      
      <h2>{props.resName}</h2>
      <h3>{props.resTag}</h3>
      
      <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/6513abee-f904-4a0e-9b49-90d1cc29551c_1003414.jpg" alt="res-logo"></img>

      <h4>{props.resCuisine} </h4>
      <h4>{props.resRating}</h4>
      <h4>Delivered in 45 minutes  </h4>


    </div>
  )
}

const resList=  [{}]   //data from swiggy




const Body=()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">

      <ResturantCard
        resData={resList[0]}


        />
       <ResturantCard
        resData={resList[1]}


        />



        <ResturantCard 
         resName="PIZZA HUT"
          resTag="Loaded with Cheese"
         resCuisine="Italian"
          resRating="4.4 stars"
        
        />
        <ResturantCard 
          resName="KFC"
          resTag="Tasty Chicken"
          resCuisine="American"
          resRating="4.5 stars"
        
        />
        <ResturantCard
          resName="Biryani House"
          resTag="Best Chicken and Rice"
          resCuisine="Indian"
          resRating="4.0 stars"


        />
      
      



      </div>

    </div>
  )
}



 
const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
     


    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);



