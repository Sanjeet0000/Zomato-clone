import Item1 from "../assets/item1.avif";
import Item2 from "../assets/item2.avif";
import Item3 from "../assets/item3.avif";
import "./MenuCards.css";

function MenuCards() {
  return (
    <div className="CardContainer">
      <div className="Card">
        <div className="Card_ImageContainer">
          <img src={Item1} alt="menu item" />
        </div>
        <div className="Menu_TextContainer">
          <p className="Menu_TextHeading">Order Online</p>
          <p className="Menu_TextSubHeading">
            Stay home and order to your doorstep
          </p>
        </div>
      </div>
      <div className="Card">
        <div className="Card_ImageContainer">
          <img src={Item2} alt="menu item" />
        </div>
        <div className="Menu_TextContainer">
          <p className="Menu_TextHeading">Dining</p>
          <p className="Menu_TextSubHeading">
            View the city's favourite dining venues
          </p>
        </div>
      </div>
      <div className="Card">
        <div className="Card_ImageContainer">
          <img src={Item3} alt="menu item" />
        </div>
        <div className="Menu_TextContainer">
          <p className="Menu_TextHeading">Nightlife and Clubs</p>
          <p className="Menu_TextSubHeading">
            Explore the city's top nightlife outlets
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuCards;
