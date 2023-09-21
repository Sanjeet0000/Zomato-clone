import { useState } from "react";
import "./Explore.css";
import DownArrow from "../assets/downarrow.svg";

function Explore() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);

  const toggleDropDown = (isClicked, setIsClicked) => {
    setIsClicked(!isClicked);
  };

  const Restaurants = [
    "Bikanervala",
    "Biryani Blues",
    "BTW",
    "Burger King",
    "Burger Singh",
    "Domino's",
    "Dunkin' Donuts",
    "Haldiram's",
    "KFC",
    "Krispy Kreme",
    "McDonald's",
    "Moti Mahal Delux",
    "Om Sweets & Snacks",
    "Paradise Biryani",
    "Pizza Hut",
  ];
  const Cities = [
    "Delhi NCR",
    "Kolkata",
    "Mumbai",
    "Bengaluru",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Lucknow",
    "Kochi",
    "Jaipur",
    "Ahmedabad",
    "Chandigarh",
    "Goa",
    "Indore",
    "Gangtok",
    "Nashik",
    "Ooty",
    "Shimla",
    "Ludhiana",
    "Guwahati",
    "Amritsar",
    "Kanpur",
    "Allahabad",
    "Aurangabad",
    "Bhopal",
    "Ranchi",
    "Visakhapatnam",
    "Bhubaneswar",
    "Coimbatore",
    "Mangalore",
    "Vadodara",
    "Nagpur",
    "Agra",
    "Dehradun",
    "Mysore",
    "Puducherry",
    "Surat",
    "Varanasi",
    "Patna",
    "Udaipur",
    "Srinagar",
    "Khajuraho",
    "Neemrana",
    "Cuttack",
    "Trivandrum",
    "Haridwar",
    "Leh",
    "Pushkar",
    "Rajkot",
    "Madurai",
    "Kozhikode",
    "Alappuzha",
    "Thrissur",
    "Manipal",
    "Vijayawada",
    "Jodhpur",
    "Kota",
    "Ajmer",
    "Mussoorie",
    "Rishikesh",
    "Jalandhar",
    "Jammu",
    "Manali",
    "Dharamshala",
  ];

  return (
    <div className="Explore">
      <p className="Explore_MainHeading">Explore options near me</p>
      <div className="Explore_Container">
        <div
          className="Explore_Title"
          onClick={() => toggleDropDown(isClicked1, setIsClicked1)}
        >
          <p className="Explore_SubTitle">Popular cuisines near me</p>
          <img
            src={DownArrow}
            alt="arrow"
            style={{
              transform: `rotate(${isClicked1 ? "-180" : "0"}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
        <div
          className={`Explore_TextContainer ${isClicked1 ? "" : "expanded"}`}
        >
          <p className="Explore_Text">
            Bakery food near me <span className="DotSeparator" />
            Beverages food near me <span className="DotSeparator" />
            Biryani food near me <span className="DotSeparator" />
            Burger food near me <span className="DotSeparator" />
            Chinese food near me <span className="DotSeparator" />
            Continental food near me <span className="DotSeparator" />
            Desserts food near me <span className="DotSeparator" />
            Italian food near me <span className="DotSeparator" />
            Kebab food near me <span className="DotSeparator" />
            Mithai food near me <span className="DotSeparator" />
            Momos food near me <span className="DotSeparator" />
            Mughlai food near me <span className="DotSeparator" />
            North Indian food near me <span className="DotSeparator" />
            Pasta food near me <span className="DotSeparator" />
            Pizza food near me <span className="DotSeparator" />
            Rolls food near me <span className="DotSeparator" />
            Sandwich food near me <span className="DotSeparator" />
            Shake food near me <span className="DotSeparator" />
            South Indian food near me <span className="DotSeparator" />
            Street food near me
          </p>
        </div>
      </div>

      {/*********************************************************/}
      <div className="Explore_Container">
        <div
          className="Explore_Title"
          onClick={() => toggleDropDown(isClicked2, setIsClicked2)}
        >
          <p className="Explore_SubTitle">Popular restaurant types near me</p>
          <img
            src={DownArrow}
            alt="arrow"
            style={{
              transform: `rotate(${isClicked2 ? "-180" : "0"}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
        <div
          className={`Explore_TextContainer ${isClicked2 ? "" : "expanded"}`}
        >
          <p className="Explore_Text">
            Bakeries near me <span className="DotSeparator" />
            Bars near me <span className="DotSeparator" />
            Beverage Shops near me <span className="DotSeparator" />
            Bhojanalya near me <span className="DotSeparator" />
            Cafés near me <span className="DotSeparator" />
            Casual Dining near me <span className="DotSeparator" />
            Clubs near me <span className="DotSeparator" />
            Cocktail Bars near me <span className="DotSeparator" />
            Confectioneries near me <span className="DotSeparator" />
            Dessert Parlors near me <span className="DotSeparator" />
            Dhabas near me <span className="DotSeparator" />
            Fine Dining near me <span className="DotSeparator" />
            Food Courts near me <span className="DotSeparator" />
            Food Trucks near me <span className="DotSeparator" />
            Irani Cafes near me <span className="DotSeparator" />
            Kiosks near me <span className="DotSeparator" />
            Lounges near me <span className="DotSeparator" />
            Meat Shops near me <span className="DotSeparator" />
            Microbreweries near me <span className="DotSeparator" />
            Paan Shop near me <span className="DotSeparator" />
            Pubs near me <span className="DotSeparator" />
            Quick Bits near me <span className="DotSeparator" />
            Sweet Shops near me
          </p>
        </div>
      </div>

      {/*********************************************************/}
      <div className="Explore_Container">
        <div
          className="Explore_Title"
          onClick={() => toggleDropDown(isClicked3, setIsClicked3)}
        >
          <p className="Explore_SubTitle">Top Restaurant Chains</p>
          <img
            src={DownArrow}
            alt="arrow"
            style={{
              transform: `rotate(${isClicked3 ? "-180" : "0"}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
        <div
          className={`Explore_TextContainer ${isClicked3 ? "" : "expanded"}`}
        >
          <div className="Explore_Text_RestaurantCities">
            <ul>
              {Restaurants.map((restaurant) => (
                <li key={restaurant}>{restaurant}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/*********************************************************/}
      <div className="Explore_Container">
        <div
          className="Explore_Title"
          onClick={() => toggleDropDown(isClicked4, setIsClicked4)}
        >
          <p className="Explore_SubTitle">Cities We Deliver To</p>
          <img
            src={DownArrow}
            alt="arrow"
            style={{
              transform: `rotate(${isClicked4 ? "-180" : "0"}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </div>
        <div
          className={`Explore_TextContainer ${isClicked4 ? "" : "expanded"}`}
        >
          <div className="Explore_Text_RestaurantCities">
            <ul>
              {Cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
              <li className="Explore_SeeMore">See more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
