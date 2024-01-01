import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  // let searchTxt = "KFC";

  // searchText is a local state variable.
  const [allRestaurants, setAllResturants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // useState hook return an array.
  // in array first is the variable and second is the function to update the variable.
  // const [searchClicked, setSearchClicked] = useState("false"); // example

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1741116&lng=72.937198&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  console.log("render");

  // CONDITIONAL RENDERING

  // not returning component (early return)
  if (!allRestaurants) return null;

  if(filteredRestaurant?.length === 0 ) return <h2>Oops!! No such restaurant found</h2>
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurand List.
            setFilteredRestaurant(data);
          }}
        >
          Search - {searchText}
        </button>
        {/* <h2>{searchClicked}</h2> */}
      </div>
      <div className="resturant-list">
      {/* no resturant found condition over here */}
        {filteredRestaurant?.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant?.info?.id} />
          );
          {
            /*  */
          }
        })}
      </div>
    </>
  );
};

export default Body;
