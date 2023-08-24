import React from "react";
import ReactDOM from "react-dom/client";

/*
    React Element
*/

// React.createElement => ReactElement(JS Object) => HTMLElement(render on DOM)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste World 🚀"
);

// JSX - is HTML or XML like syntax and not HTML in JS
// JSX is transpiled before it reaches the JS Engine => PARCEL => Babel
// JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render )
const jsxHeading = <h1 id="heading">Namaste World using JSX 🚀</h1>;

// Both are same
// console.log("heading: ", heading);
// console.log("jsxHeading: ", jsxHeading);

/*
    React Component
*/

// React Component => JS Function => ReactElement(JS Object) => HTMLElement(render )
const Greetings = () => <h1>Hello from the other side👋</h1>;

// Component Composition => Nesting components into one another
const HeadingComponent = () => {
  return (
    <div className="container">
      <Greetings />
      <h1 id="heading">Namaste World using React Component 🚀</h1>

      {/* JS can be injected into JSX using {} as a wrapper around JS code  */}
      {10 / 2}

      {jsxHeading}

      {Greetings()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
    Rendering JSX
*/
// root.render(heading);
// root.render(jsxHeading);

/*
    Rendering Component
*/
root.render(<HeadingComponent />);
