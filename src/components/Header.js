import { useState } from "react";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://i.pinimg.com/736x/fe/50/40/fe5040ef6eb50e18c24f937bc43916a0.jpg"
      />
    </a>
  );
};

const Header = () => {
  // const [title, setTitle] = useState("Food Villa");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      className="header"
      // style={styleObj}
    >
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => setTitle("New Title")}>Change Title</button> */}
      <div
        className="nav-items"
        style={{
          fontSize: "15px",
        }}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
