import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;
