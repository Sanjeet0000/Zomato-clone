import React from "react";
import "./DeliveryItem.css";
const DeliveryItem = ({ item }) => {
  return (
    <>
      <div className="delivery-item-cover">
        <img
          src={item.cover}
          className="delivery-item-image"
          alt={item.title}
        />
      </div>
      <div className="delivery-item-title me-5 pe-2">{item.title}</div>
    </>
  );
};

export default DeliveryItem;
