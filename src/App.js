import React from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
// Named Import
import { Title } from "./components/Header";
// import both together
// import Header, {Title} from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";

// const styleObj = {
  // border: "10px solid black",
// };

// config driven UI

// const burgerKing = {
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//   name: "Burger King",
//   cusines: ["Burger", "American"],
//   rating: "4.2",
// };

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
