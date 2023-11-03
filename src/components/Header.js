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
  return (
    <div className="header" 
    // style={styleObj}
    >
      <Title />
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
    </div>
  );
};

export default Header;