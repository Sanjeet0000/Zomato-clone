import SearchBar from "../SearchBar";
import TitleImage from "../../assets/titlelogo.avif";
import { Link } from "react-router-dom";

function Header2(props) {
  return (
    <div>
      <header className="d-flex align-items-center w-100">
        <Link to="/">
          <div className="RestaurantsPage__LogoImage">
            <img src={TitleImage} alt="site logo" width="127px" height="27px" />
          </div>
        </Link>
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ width: "975px" }}
        >
          <div
            style={{
              width: "705px",
              boxShadow: "rgba(28, 28, 28, 0.2) 0px 2px 8px",
              borderRadius: "15px",
            }}
          >
            <SearchBar
              searchTerm={props.searchTerm}
              handleSearch={props.handleSearch}
            />
          </div>
          <span className="ps-5 ms-5 RestaurantsPage__HeaderText">Log in</span>
          <span className="RestaurantsPage__HeaderText">Sign up</span>
        </div>
      </header>

      <div>
        <p className="mt-5 LocationLine">
          Home / India / Delhi NCR / Central Delhi / Connaught Place Restaurants
        </p>
      </div>
    </div>
  );
}

export default Header2;
