
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

  
  
  // suppose we already had h1 in our html file with some contents say "I am h1" then if we execute the above code then it will replace the contents of h1 with "I am Child 2" and "I am Child 3" because we are using React.createElement to create a new element and render it in the root div.
  // 
  //  So, the contents of h1 will be replaced with the new elements created by React.createElement. If we want to keep the existing contents of h1, we can use ReactDOM.render to render the new elements inside h1 without replacing its contents.
  
  
  
  
  // Difference between library and framework:
  // A library is a collection of pre-written code that can be used to perform specific tasks, while a framework is a more comprehensive structure that provides a foundation for building applications. A library is typically used to add functionality to an existing application, while a framework provides a complete architecture for building an application from scratch.
  
  // react is a library for building user interfaces, while react-router is a framework for building single-page applications (SPAs) using react. React provides the core functionality for building UI components, while react-router provides the routing and navigation capabilities needed to create SPAs.
  
  // React can work independently in a small portion of our application , hence it is a library. 
  // But react-router is used to create a single page application, hence it is a framework.


// some examples of libraries are:
// 1. jQuery: A fast, small, and feature-rich JavaScript library that simplifies HTML document traversal and manipulation, event handling, and animation. It is widely used for DOM manipulation and AJAX requests.
// 2. Lodash: A modern JavaScript utility library that provides helpful functions for working with arrays, objects, and other data types. It is often used for data manipulation and functional programming tasks.
// ----------------------------------------------------
// Somw examples of frameworks are:
// 1. Angular: A platform and framework for building single-page client applications using HTML and TypeScript. It provides a comprehensive set of tools and libraries for building complex web applications.
// 2. Vue.js: A progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and can be used for building both small and large applications.
// 3. Django: A high-level Python web framework that encourages rapid development and clean, pragmatic design. It provides a robust set of tools for building web applications, including an ORM, authentication, and an admin interface.
// 4. Ruby on Rails: A web application framework written in Ruby that follows the MVC (Model-View-Controller) architecture. It emphasizes convention over configuration and provides a set of tools for building database-backed web applications quickly.
// 5. Flask: A lightweight Python web framework that is easy to use and flexible. It is often used for building small to medium-sized web applications and APIs.
// 6. ASP.NET: A web framework developed by Microsoft for building dynamic web applications and services using .NET technologies. It provides a comprehensive set of tools and libraries for building enterprise-level applications.
// 7. Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is often used for building RESTful APIs and server-side applications.
// 8. Spring: A powerful Java framework for building enterprise-level applications. It provides a comprehensive set of tools and libraries for building web applications, RESTful APIs, and microservices.
 