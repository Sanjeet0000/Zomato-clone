import "./Collections.css";
import CollectionImage1 from "../assets/collection1.avif";
import CollectionImage2 from "../assets/collection2.avif";
import CollectionImage3 from "../assets/collection3.avif";
import CollectionImage4 from "../assets/collection4.avif";
import SideArrow from "../assets/sidearrowthick.svg";
import SideArrowRed from "../assets/sidearrowthickred.svg";

function Collections() {
  return (
    <div className="Collections">
      <h2 className="Collections_Heading">Collections</h2>
      <div className="SubHeading">
        Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi
        NCR, based on trends
        <span>
          All collections in Delhi NCR
          <img
            src={SideArrowRed}
            alt="side arrow"
            style={{ paddingLeft: "0.5rem" }}
          />
        </span>
      </div>

      <div className="CollectionCard_Container">
        <div className="CollectionCard">
          <img src={CollectionImage1} alt="info card" />
          <div className="CollectionCard_TextContainer">
            <p>22 Live Cricket Screenings</p>
            <h6>
              21 places
              <img src={SideArrow} alt="Side Arrow" className="SideArrow" />
            </h6>
          </div>
        </div>
        <div className="CollectionCard">
          <img src={CollectionImage2} alt="info card" />
          <div className="CollectionCard_TextContainer">
            <p>10 Unique Dining Experien...</p>
            <h6>
              10 Places
              <img src={SideArrow} alt="Side Arrow" className="SideArrow" />
            </h6>
          </div>
        </div>
        <div className="CollectionCard">
          <img src={CollectionImage3} alt="info card" />
          <div className="CollectionCard_TextContainer">
            <p>21 Best Insta-worthy Places</p>
            <h6>
              20 Places
              <img src={SideArrow} alt="Side Arrow" className="SideArrow" />
            </h6>
          </div>
        </div>
        <div className="CollectionCard">
          <img src={CollectionImage4} alt="info card" />
          <div className="CollectionCard_TextContainer">
            <p>21 Romantic Dining Places</p>
            <h6>
              20 Places
              <img src={SideArrow} alt="Side Arrow" className="SideArrow" />
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
