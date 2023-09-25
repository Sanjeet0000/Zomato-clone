import React from "react";
import { restaurants } from "./data";

import Filters from "../Filters/Filters";
import ExploreSection from "../ExploreSection/ExploreSection";
import TopBrands from "../TopBrands/TopBrands";
import DeliveryColletions from "./DeliveryCollection";
import SettingIcon from "../../../assets/settings.svg";
import "./Delivery.css";

const deliveryFilters = [
  {
    id: 1,
    icon: (
      <img
        src={SettingIcon}
        alt="setting"
        style={{ height: "18px", width: "24px" }}
      />
    ),
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Pure Veg",
  },
  {
    id: 4,
    title: "Cuisines",
  },
];

const Delivery = (props) => {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const restaurantNameIncludesSearchTerm = restaurant.info.name
      .toLowerCase()
      .includes(props.searchTerm.toLowerCase());

    const cuisineNameIncludesSearchTerm = restaurant.info.cuisine.some(
      (cuisine) =>
        cuisine.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    return restaurantNameIncludesSearchTerm || cuisineNameIncludesSearchTerm;
  });

  return (
    <div>
      <div className="max-width FilterListItems">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryColletions />
      <TopBrands />
      {filteredRestaurants.length === 0 ? (
        <div className="Delivery__NotFound">
          <p>No restaurants found.</p>
        </div>
      ) : (
      <ExploreSection
        restaurants={filteredRestaurants}
        collectionName="Delivery Restaurants in Connaught Place"
        searchTerm={props.searchTerm}
        handleSearch={props.handleSearch}
      />
      )}
    </div>
  );
};

export default Delivery;
