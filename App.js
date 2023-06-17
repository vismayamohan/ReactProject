import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   {
//     id:'hello',
//     style:{
//       background: 'purple',
//       color:'white'
//     },
//     key: "h1"
//   },
//   "Hello React for parcel"
// );

const heading2 = React.createElement(
  "h2",
  {
    id: "hello2",
    key: "h2",
  },
  "Hello World from React"
);
console.log(heading2);
const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
  }
  // [React.createElement(
  //   "h1",
  //   {
  //     id:'hello',
  //     style:{
  //       background: 'purple',
  //       color:'white'
  //     },
  //     key: "h1"
  //   },
  // "Namste React"
  // ),
  // React.createElement(
  //   "ul",
  //   {},
  //   [React.createElement(
  //     "li",
  //     {},
  //     "About Us"
  //   )],
  //   [React.createElement(
  //     "li",
  //     {},
  //     "Home"
  //   )],
  //   [React.createElement(
  //     "li",
  //     {},
  //     "Contact Us"
  //   )],
  // )]
);

// JSX

const headerTag = (
  <h1 id="title" key="h1" className="headerone">
    Hello World Vis
  </h1>
);

// React Component
// Functional Component

const HeaderComponent = () => {
  return <h2>hello 2 </h2>
}

HeaderComponent()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headerTag);
