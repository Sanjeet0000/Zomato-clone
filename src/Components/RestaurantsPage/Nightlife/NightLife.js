import React from "react";
import { nightLife } from "./data";
import Collection from "../CollectionComponent/CollectionComponent";
import ExploreSection from "../ExploreSection/ExploreSection";
import Filters from "../Filters/Filters";
import "./NightLife.css";

const nightFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 5,
    title: "Rating: 4.0+",
  },
  {
    id: 4,
    title: "Pubs & Bars",
  },
];
const collectionList = [
  {
    id: 1,
    title: "Microbreweries",
    cover:
      "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
    places: "29 Places",
  },
  {
    id: 2,
    title: "Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
    places: "22 Places",
  },
  {
    id: 3,
    title: "Artisan Cocktails",
    cover:
      "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg",
    places: "20 Places",
  },
  {
    id: 4,
    title: "Happy Hours",
    cover:
      "https://b.zmtcdn.com/data/collections/67c4acc3f607dbcff71a8e1e77a70c8a_1535469199.jpg",
    places: "12 Places",
  },
  {
    id: 5,
    title: "Beer in a Bar",
    cover:
      "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
    places: "5 Places",
  },
  {
    id: 6,
    title: "Bar-gain",
    cover:
      "https://b.zmtcdn.com/data/collections/4e1df9d915b25858fbc9acd2154d1dff_1631511179.jpg",
    places: "9 Places",
  },
];

const Nightlife = (props) => {
  const filteredByKeywordRestaurants = nightLife.filter((restaurant) => {
    const restaurantNameIncludesSearchTerm = restaurant.info.name
      .toLowerCase()
      .includes(props.keywordSearchTerm.toLowerCase());

    const cuisineNameIncludesSearchTerm = restaurant.info.cuisine.some(
      (cuisine) =>
        cuisine.name
          .toLowerCase()
          .includes(props.keywordSearchTerm.toLowerCase())
    );

    return restaurantNameIncludesSearchTerm || cuisineNameIncludesSearchTerm;
  });

  const filteredByLocationRestaurants = filteredByKeywordRestaurants.filter(
    (restaurant) => {
      return restaurant.info.location
        .toLowerCase()
        .includes(props.locationSearchTerm.toLowerCase());
    }
  );

  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilters} />
      </div>
      {filteredByLocationRestaurants.length === 0 ? (
        <div className="NightLife__NotFound">
          <p>No restaurants found.</p>
        </div>
      ) : (
        <ExploreSection
          restaurants={filteredByLocationRestaurants}
          collectionName="Nightlife Restaurants in Connaught Place"
        />
      )}
    </div>
  );
};

export default Nightlife;
