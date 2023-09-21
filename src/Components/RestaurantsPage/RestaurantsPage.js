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
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderContent = (tab) => {
    if (tab === "Delivery") {
      return <Delivery searchTerm={searchTerm} handleSearch={handleSearch} />;
    } else if (tab === "Dining Out") {
      return <DiningOut searchTerm={searchTerm} handleSearch={handleSearch} />;
    } else if (tab === "Nightlife") {
      return <NightLife searchTerm={searchTerm} handleSearch={handleSearch} />;
    }
  };

  return (
    <>
      <div className="RestaurantsPage__Container m-auto">
        <Header2 searchTerm={searchTerm} handleSearch={handleSearch} />
        <TabSelector setActiveTab={setActiveTab} activeTab={activeTab} />
        {renderContent(activeTab)}
        <Explore />
      </div>
      <Footer />
    </>
  );
}

export default RestaurantsPage;
