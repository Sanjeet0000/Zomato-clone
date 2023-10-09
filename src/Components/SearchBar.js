import SearchIcon from "../assets/search.svg";
import DownArrow from "../assets/downarrowthick.svg";
import MapPin from "../assets/drop-pin.svg";
import "./SearchBar.css";
function SearchBar(props) {
  return (
    <div className="SearchBar">
      <div className="LocationSearchContainer">
        <img src={MapPin} alt="map pin" className="MapPin" />
        <input
          className="LocationText"
          placeholder="Connaught Place, New Delhi"
          name="Location Text"
          value={props.locationSearchTerm}
          onChange={props.handleLocationSearch}
        />
        <img src={DownArrow} alt="Down arrow" className="DownArrow" />
      </div>
      <div className="SeparatorLine"></div>
      <div className="SearchIconContainer">
        <img src={SearchIcon} alt="search" className="SearchIcon" />
      </div>
      <input
        className="SearchText"
        placeholder="Search for restaurant, cuisine or a dish"
        name="Search Text"
        value={props.keywordSearchTerm}
        onChange={props.handleKeywordSearch}
      />
    </div>
  );
}

export default SearchBar;
