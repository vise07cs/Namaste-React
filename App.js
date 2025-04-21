
  const parent= React.createElement(
    "div",
    {id:"parent", className:"parent"},
    React.createElement("h1", {id:"child1", }, [
      React.createElement("h1", {id:"child2", }, "I am Child 2"),
      React.createElement("h2", {id:"child3",}, "I am Child 3")
    ])
    
  );
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent) // 
  //React Element is actually a JavaScript object .which renders and converts into HTML element.



// The above structure is a nested structure of React elements.
  // The above code creates a parent div with three child h1 elements using React's `createElement` method.
  
// The nested structuere is as follows:
// ```html
// <div id="parent" class="parent">
//   <h1 id="child1">
//     <h1 id="child2">I am Child 2</h1>
//     <h2 id="child3">I am Child 3</h2>
//   </h1>
// </div>
// ```
// The above code creates a parent div with three child h1 elements using React's `createElement` method.
// However , the react code becomes a bit complex when we have to create a nested structure of elements.
// So, we can use JSX syntax to create a nested structure of elements easily.


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //  Code Explanation:

  // line 1

  // const heading = React.createElement( 
  //  "h1",
  //  { id: "heading",
  //  className: "heading" },
  //  "Hello World from React JS" );
  
// #### What's happening here?

// You're using **`React.createElement`** to create a React element manually.

// - **"h1"** → This is the HTML tag you want to create (like `<h1>`).
// - **{ id: "heading", className: "heading" }** → This is the **props object** (just like HTML attributes):
//   - `id="heading"`
//   - `class="heading"` → In React, we write it as `className`.
// - **"Hello World from React JS"** → This is the **child** or **content** inside the tag, like:


//   ```html
//   <h1>Hello World from React JS</h1>



// line 2
//   const root = ReactDOM.createRoot(document.getElementById("root"));

// - This is where we **tell React** where in our HTML page we want to **render** our React components.
// - `document.getElementById("root")` → Looks for a div with `id="root"` in your HTML file.
// - `ReactDOM.createRoot(...)` → Creates a place (called "root") where React will take control and render elements.

// ---

// line 3
//   root.render(heading);

// This tells React to render the heading React element we created earlier into the root of our page.

// After this line runs, you'll see the <h1>Hello World from React JS</h1> appear on your webpage.



