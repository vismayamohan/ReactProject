import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/images/logo.png";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "hello",
//     style: {
//       background: "purple",
//       color: "white",
//     },
//     key: "h1",
//   },
//   "Hello React for parcel"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "hello2",
//     key: "h2",
//   },
//   "Hello World from React"
// );
// console.log(heading2);
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     hello: "world",
//   }[
//     (React.createElement(
//       "h1",
//       {
//         id: "hello",
//         style: {
//           background: "purple",
//           color: "white",
//         },
//         key: "h1",
//       },
//       "Namste React"
//     ),
//     React.createElement(
//       "ul",
//       {},
//       [React.createElement("li", {}, "About Us")],
//       [React.createElement("li", {}, "Home")],
//       [React.createElement("li", {}, "Contact Us")]
//     ))
//   ]
// );

// JSX

// const headerTag = (
//   <h1 id="header" key="h1" className="headerone">
//     Hello World Vis
//   </h1>
// );

// const Title = () => (
//   <h1 id="title" key="title">
//     Hello Im Title
//   </h1>
// );

// var xyz = 10;
// React Component
// Functional Component
// Name of the component starts with capital letter - not mandatory, it is a good practise
// const HeaderComponent = () => (
//   <div>
//     {xyz}
//     <Title /> -- component composition
//     {headerTag} -- this code is coming from react element
//     <h1>Hello world namaste react</h1>
//     <h2>Namaste react functional component</h2>
//   </div>
// );

// const headingData = React.createElement(
//   "div",
//   {
//     className: "title",
//     key: "title",
//   },
//   [React.createElement("h1", { key: "h1" }, "Hello I'm header tag 1")],
//   [React.createElement("h2", { key: "h2" }, "Hello I'm header tag 2")],
//   [React.createElement("h3", { key: "h3" }, "Hello I'm header tag 3")]
// );

// const headingDataJSX = (
//   <div className="title" key="title">
//     <h1 key="h1">Hello I'm header tag 1 JSX</h1>
//     <h2 key="h2">Hello I'm header tag 2 JSX</h2>
//     <h3 key="h3">Hello I'm header tag 3 JSX</h3>
//   </div>
// );

// const HeadingDataFunction = () => {
//   return (
//     <div className="title" key="title">
//       <h1 key="h1">Hello I'm header tag 1 function</h1>
//       <h2 key="h2">Hello I'm header tag 2 function</h2>
//       <h3 key="h3">Hello I'm header tag 3 function</h3>
//       <CompositionComponent />
//       {titleComponent}
//       <TitleComponent />
//       <TitleComponent></TitleComponent>
//     </div>
//   );
// };

// const CompositionComponent = () => {
//   return <h5>Just calling this for composition component purpose.</h5>;
// };

// const titleComponent = (
//   <h2>
//     TitleComponent variable, where we can call this directly inside any
//     component directly using curly braces.
//   </h2>
// );

// const TitleComponent = () => (
//   <h4>This is just a title functional component which can be called inside another functional component or component</h4>
//)

const HeaderComponent = () => (
  <header className="header">
    <div className="logoWrapper">
      <img src={logo} alt="Logo" />
    </div>
    <div className="searchWrapper">
      <input className="input" type="search" placeholder="Search..." />
    </div>
    <div className="userWrapper">
      <span className="userIcon">user</span>
    </div>
  </header>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
