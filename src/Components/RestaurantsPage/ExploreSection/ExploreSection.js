import React from "react";
import ExploreCard from "./ExploreCard";
import "./ExploreSection.css";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} key={restaurant.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
