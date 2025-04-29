import React from "react";
import ReactDOM from "react-dom/client";
  const parent= React.createElement(
    "div",
    {id:"parent", className:"parent"},
    React.createElement("h1", {id:"child1", }, "Hello World!"),
    
      
    )
    
  
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent) // 

  
  

 