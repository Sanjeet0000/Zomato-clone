import "./PopularLocalities.css";
import SideArrow from "../assets/sidearrow.svg";
import DownArrow from "../assets/downarrow.svg";

function PopularLocalities() {
  const Locations = [
    { place: "Connaught Place", quantity: "258" },
    { place: "Sector 29", quantity: "148" },
    { place: "Sector 18, Noida", quantity: "211" },
    { place: "Rajouri Garden", quantity: "329" },
    { place: "Saket", quantity: "328" },
    { place: "DLF Cyber City", quantity: "165" },
    { place: "Golf Course Road", quantity: "158" },
    { place: "DLF Phase 4", quantity: "223" },
  ];
  return (
    <div className="PopularLocalities">
      <p className="PopularLocalities_Title">
        Popular localities in and around Delhi NCR
      </p>

      <div className="LocationCardContainer">
        {Locations.map((location) => (
          <div className="LocationCard" key={location.place}>
            <div className="LocationCardText">
              <span>{location.place}</span>
              <p>{location.quantity} Places</p>
            </div>
            <img
              src={SideArrow}
              alt="side arrow"
              className="LocationSideArrow"
            />
          </div>
        ))}

        <div className="LocationCard SeeMoreCard">
          <span>see more</span>
          <img src={DownArrow} alt="down arrow" className="LocationDownArrow" />
        </div>
      </div>
    </div>
  );
}

export default PopularLocalities;
