import "./Footer.css";
import ZomatoSmall from "../assets/zomatosmall.avif";
import DownArrow from "../assets/downarrow.svg";
import IndianFlag from "../assets/indiaflag.png";
import LanguageGlobe from "../assets/languageglobe.svg";
import LinkedinLogo from "../assets/linkedinlogo.svg";
import InstagramLogo from "../assets/instagramlogo.svg";
import TwitterLogo from "../assets/twitterlogo.svg";
import YoutubeLogo from "../assets/youtubelogo.svg";
import FacebookLogo from "../assets/facebooklogo.svg";
import GoogleStore from "../assets/google.webp";
import AppleStore from "../assets/applestore.webp";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <section className="FootLinks">
          <div className="FooterSubContainer">
            <img
              src={ZomatoSmall}
              alt="zomato logo"
              width="132px"
              height="28px"
            />
            <div className="FooterDropDownButtonGroup">
              <div className="FooterDropDownButton">
                <img
                  src={IndianFlag}
                  alt="indian flag"
                  width="22px"
                  height="18px"
                />
                <span>India</span>
                <img src={DownArrow} alt="down arrow" width="15px" />
              </div>
              <div className="FooterDropDownButton">
                <img
                  src={LanguageGlobe}
                  alt="language logo"
                  width="22px"
                  height="18px"
                />
                <span>English</span>
                <img src={DownArrow} alt="down arrow" width="15px" />
              </div>
            </div>
          </div>
          <div className="FooterLinksContainer">
            <div className="AboutZomato">
              <h6>ABOUT ZOMATO</h6>
              <p>Who We Are</p>
              <p>Blog</p>
              <p>Work With Us</p>
              <p>Investor Relations</p>
              <p>Report Fraud</p>
              <p>Contact Us</p>
            </div>

            <div className="Zomatoverse">
              <h6>ZOMATOVERSE</h6>
              <p>Zomato</p>
              <p>Blinkit</p>
              <p>Feeding India</p>
              <p>Hyperpure</p>
              <p>Zomaland</p>
            </div>

            <div>
              <div className="ForRestaurants">
                <h6>FOR RESTAURANTS</h6>
                <p>Partner With Us</p>
                <p>Apps For You</p>
              </div>
              <div className="ForEnterprise">
                <h6>FOR ENTERPRISE</h6>
                <p>Zomato For Enterprise</p>
              </div>
            </div>

            <div className="LearnMore">
              <h6>LEARN MORE</h6>
              <p>Privacy</p>
              <p>Security</p>
              <p>Terms</p>
              <p>Sitemap</p>
            </div>

            <div className="SocialLinks">
              <h6>SOCIAL LINKS</h6>
              <div className="SocialLogoContainer">
                <img src={LinkedinLogo} alt="Linkedin logo" width="22px" />
                <img src={InstagramLogo} alt="Instagram logo" width="22px" />
                <img src={TwitterLogo} alt="Twitter logo" width="22px" />
                <img src={YoutubeLogo} alt="Youtube logo" width="22px" />
                <img src={FacebookLogo} alt="Facebook logo" width="22px" />
              </div>

              <div className="FooterAppStore">
                <img
                  src={GoogleStore}
                  alt="Go to playstore"
                  width="137px"
                  height="40px"
                />
                <img
                  src={AppleStore}
                  alt="Go to ios store"
                  width="137px"
                  height="40px"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="FooterDivider"></div>
        <p className="FooterBottomText">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2023 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
