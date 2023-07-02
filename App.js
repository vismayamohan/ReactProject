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
  <h1 id="header" key="h1" className="headerone">
    Hello World Vis
  </h1>
);

const Title = () => (
  <h1 id="title" key="title">Hello Im Title</h1>
);

var xyz = 10;
// React Component
// Functional Component
// Name of the component starts with capital letter - not mandatory, it is a good practise
const HeaderComponent = () => (
  <div>
    {xyz}
    <Title /> -- component composition
    {headerTag} -- this code is coming from react element
    <h1>Hello world namaste react</h1>
    <h2>Namaste react functional component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
