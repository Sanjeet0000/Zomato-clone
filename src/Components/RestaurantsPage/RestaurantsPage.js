import React, { useState } from "react";
import "./RestaurantsPage.css";
import Header2 from "./Header2";
import TabSelector from "./TabSelector";
import Explore from "../Explore";
import Footer from "../Footer";
import Delivery from "./Delivery/Delivery";
import DiningOut from "./DiningOut/DiningOut";
import NightLife from "./Nightlife/NightLife";

function RestaurantsPage() {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [keywordSearchTerm, setKeywordSearchTerm] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");

  const handleKeywordSearch = (event) => {
    setKeywordSearchTerm(event.target.value);
  };
  const handleLocationSearch = (event) => {
    setLocationSearchTerm(event.target.value);
  };

  const renderContent = (tab) => {
    if (tab === "Delivery") {
      return (
        <Delivery
          keywordSearchTerm={keywordSearchTerm}
          handleKeywordSearch={handleKeywordSearch}
          locationSearchTerm={locationSearchTerm}
          handleLocationSearch={handleLocationSearch}
        />
      );
    } else if (tab === "Dining Out") {
      return (
        <DiningOut
          keywordSearchTerm={keywordSearchTerm}
          handleKeywordSearch={handleKeywordSearch}
          locationSearchTerm={locationSearchTerm}
          handleLocationSearch={handleLocationSearch}
        />
      );
    } else if (tab === "Nightlife") {
      return (
        <NightLife
          keywordSearchTerm={keywordSearchTerm}
          handleKeywordSearch={handleKeywordSearch}
          locationSearchTerm={locationSearchTerm}
          handleLocationSearch={handleLocationSearch}
        />
      );
    }
  };

  return (
    <>
      <Header2
        keywordSearchTerm={keywordSearchTerm}
        handleKeywordSearch={handleKeywordSearch}
        locationSearchTerm={locationSearchTerm}
          handleLocationSearch={handleLocationSearch}
      />
      <div className="RestaurantsPage__Container">
        <div className="mt-5 pt-5">
          <p className="mt-5 LocationLine">
            Home / India / Delhi NCR / Central Delhi / Connaught Place
            Restaurants
          </p>
        </div>
        <TabSelector setActiveTab={setActiveTab} activeTab={activeTab} />
        {renderContent(activeTab)}
        <Explore />
      </div>
      <Footer />
    </>
  );
}

export default RestaurantsPage;
