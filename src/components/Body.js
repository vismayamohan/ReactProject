import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filteredDta = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredDta;
}

const Body = () => {
  // let searchTxt = "KFC";

  // searchText is a local state variable.
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState();
  // useState hook return an array.
  // in array first is the variable and second is the function to update the variable.
  // const [searchClicked, setSearchClicked] = useState("false"); // example

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // if(searchClicked === "true") {
            //   setSearchClicked("false");
            // } else {
            //   setSearchClicked("true");
            // }
            // searchClicked = "true" ? setSearchClicked("true"):setSearchClicked("false")
            // need to filter data
            const filteredData = filterData(searchText, restaurant);
            // update the state - restaurand List.
            setRestaurant(filteredData);
          }}
        >
          Search - {searchText}
        </button>
        {/* <h2>{searchClicked}</h2> */}
      </div>
      <div className="resturant-list">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
