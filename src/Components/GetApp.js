import "./GetApp.css";
import Phone from "../assets/phoneapp.avif";
import GoogleStore from "../assets/google.webp";
import AppleStore from "../assets/applestore.webp";
import { useState } from "react";

function GetApp() {
  const [value, setValue] = useState("");
  const [radioSelection, setRadioSelection] = useState("Email");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function radioSelectionHandler(radioSelectionValue) {
    setRadioSelection(radioSelectionValue);
  }

  const EmailContent = (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        id="Email Text"
      />
      <label className={value && "filled"} htmlFor="Email Text">
        Email
      </label>
    </>
  );

  const PhoneNumberContent = (
    <div className="PhoneNumberContainer">
      <select>
        <option value="+91">+91</option>
      </select>
      <input placeholder="type here..." />
    </div>
  );

  let SelectedInputField;
  if (radioSelection === "Email") {
    SelectedInputField = EmailContent;
  } else {
    SelectedInputField = PhoneNumberContent;
  }
  return (
    <div className="GetApp">
      <div className="GetApp_Container">
        <img src={Phone} alt="phone preview" className="GetApp_PhoneImg" />

        <div className="GetApp_TextContainer">
          <p className="GetApp_Title">Get the Zomato app</p>
          <p className="GetApp_SubTitle">
            We will send you a link, open it on your phone to download the app
          </p>
          <div className="GetApp_RadioButtonGroup">
            <div>
              <input
                type="radio"
                id="EmailAddress"
                name="ProvideDetail"
                defaultChecked
                onChange={() => radioSelectionHandler("Email")}
              />
              <label htmlFor="EmailAddress">Email</label>
            </div>
            <div>
              <input
                type="radio"
                id="PhoneNumber"
                name="ProvideDetail"
                onChange={() => radioSelectionHandler("PhoneNumber")}
              />
              <label htmlFor="PhoneNumber">Phone</label>
            </div>
          </div>
          <div className="GetApp_Email">
            <div className="input-container">{SelectedInputField}</div>
            <button>Share App Link</button>
          </div>
          <div>
            <p className="GetApp_DownloadText">Downlaod App from</p>
            <div className="GetApp_StoreLinkGroup">
              <img src={GoogleStore} alt="Go to playstore" />
              <img src={AppleStore} alt="Go to ios store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetApp;
