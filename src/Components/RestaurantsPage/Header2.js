import SearchBar from "../SearchBar";
import TitleImage from "../../assets/titlelogo.avif";
import { Link } from "react-router-dom";
import "./Header2.css";

function Header2(props) {
  return (
    <div className="Header__Container">
      <header className="d-flex align-items-center w-100 bg-light">
        <Link to="/">
          <div className="Header__LogoImage">
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
          <span className="ps-5 ms-5 Header__Text">Log in</span>
          <span className="Header__Text">Sign up</span>
        </div>
      </header>
    </div>
  );
}

export default Header2;
