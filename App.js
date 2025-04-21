const heading= React.createElement(
  "h1",
  {id:"heading", className:"heading"},  // props object

  "Hello World from React JS");  //children

   const root=ReactDOM.createRoot(document.getElementById("root"));

   root.render(heading) // 



   console.log(heading); // React element , we will see the object in the console
    


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



