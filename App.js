// <div id="parent">
//     <div id="child">
//         <h1>Hello from H1 tag</h1>
//         <h2>Hello from H2 tag</h2>
//     </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from H1 tag"),
    React.createElement("h2", {}, "Hello from H2  tag"),
  ])
);

console.log("parent: ", parent);

// const heading = React.createElement("h1", {id: "heading "}, "Namaste World from React!");
// console.log("heading: ", heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
