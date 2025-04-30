import React from "react";
import ReactDOM from "react-dom/client";
 

//JSX


const Title =(
  <h1 className="head">
    Title React Element
  </h1>
)

// React Component  --> Everything is a component in react


const num=100;
// const data =api.getData(); // api is a function that returns data
const HeadingComponent = () => (
  <div id="container">
    {Title}
    <h1 className="heading">Namste React HeadingFunctional Component </h1>
    
    <h2>{num}</h2>
    {/* {data} */}

  </div>
 
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);



