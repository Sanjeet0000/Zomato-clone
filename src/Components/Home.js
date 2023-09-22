import "./Home.css";
import TitleImage from "../assets/titlelogo.avif";
import SearchBar from "./SearchBar";
import MenuCards from "./MenuCards";
import Collections from "./Collections";
import PhoneIcon from "../assets/phone.svg";
import PopularLocalities from "./PopularLocalities";
import GetApp from "./GetApp";
import Explore from "./Explore";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="MainContainer">
      <div className="Image_Container">
        <nav className="NavBar">
          <div className="DownloadIcon_Container">
            <img src={PhoneIcon} alt="phone icon" className="DownloadIcon" />
            <span>Get the App</span>
          </div>
          <ul>
            <li>Investor Relations</li>
            <li>Add restaurant</li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
        </nav>

        <div className="TitleSearchBar">
          <img src={TitleImage} alt="Zomato" width="280px" height="60px" />
          <p>Discover the best food & drinks in Delhi NCR</p>
          <div style={{ marginTop: "2.5rem" }}>
            <Link to="/ncr" style={{ textDecoration: "none" }}>
              <SearchBar />
            </Link>
          </div>
        </div>
      </div>
      <section className="MainContent">
        <Link to="/ncr" style={{ textDecoration: "none" }}>
          <MenuCards />
          <Collections />
          <PopularLocalities />
        </Link>
        <GetApp />
        <Explore />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
