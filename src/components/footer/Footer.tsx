import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ImCheckmark2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "./../../assets/servin-logo-1.png";
import "./Footer.css";
import s1 from "./../../assets/slider/servin-1.jpg";
import s2 from "./../../assets/slider/servin-3.jpg";
import s3 from "./../../assets/slider/servin-4.jpg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column1">
        <ul>
          <img src={logo} alt="logo" />
          <li>
            <p className="footer-text-intro">
              کشور ایران با تاریخ و تمدن کهن در هنر و صنعت و برخوردارى از ذخایر
              متنابهى از مواد اولیه از دیر باز با عنوان بسترى مناسب براى صنعت
              کاشى و سرامیک مطرح بوده است و مى توان پیشینه این هنر دیرینه را به
              کتیبه هاى نقش برجسته هخامنشیان در شوش مربوط دانست.
            </p>
          </li>
          <li>
            <div className="footer-icon-container">
              <FaTelegram className="footer-icon" />
              <FaYoutube className="footer-icon" />
              <FaTwitter className="footer-icon" />
              <FaApple className="footer-icon" />
            </div>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>پروژه‌های ما</li>
          <li>
            <div className="footer-service-container">
              <img src={s1} alt="logo" className="footer-img-logo" />
              <span>کاشی لعابی</span>
            </div>
          </li>
          <li>
            <div className="footer-service-container">
              <img src={s2} alt="logo" className="footer-img-logo" />
              <span>سرامیک‌های موزاییکی </span>
            </div>
          </li>
          <li>
            <div className="footer-service-container">
              <img src={s3} alt="logo" className="footer-img-logo" />
              <span>سرامیک فول بادی</span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>دسترسی سریع</li>
          <li className="footer-link-container">
            <NavLink to={"/"} className="footer-link">
              <ImCheckmark2 className="footer-link-icon" />
              خانه
            </NavLink>
          </li>
          <li className="footer-link-container">
            <NavLink to={"/about"} className="footer-link">
              <ImCheckmark2 className="footer-link-icon" />
              درباره ما
            </NavLink>
          </li>

          <li className="footer-link-container">
            <NavLink to={"/contact"} className="footer-link">
              <ImCheckmark2 className="footer-link-icon" />
              تماس باما
            </NavLink>
          </li>
          <li className="footer-link-container">
            <NavLink to={"/services"} className="footer-link">
              <ImCheckmark2 className="footer-link-icon" />
              خدمات ما
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>خبرنامه</li>
          <li>
            <div className="footer-input-container">
              <input
                placeholder=" ایمیل "
                type="email"
                className="footer-input"
              />
              <button className="footer-btn">عضویت</button>
            </div>
          </li>
          <li>
            <div className="footer-contact">
              <div className="footer-contact-icon">
                <BsFillTelephoneFill className="ft-icon"/>
              </div>

              <div className="footer-contact-text">
                <span>شماره تماس</span>
                <span>(+98) 916 - 123- 4567</span>
              </div>
            </div>
          </li>
          <li>
            <div className="footer-contact">
              <div className="footer-contact-icon">
                <MdMail className="ft-icon"/>
              </div>
              <div className="footer-contact-text">
                <span>پست الکترونیک </span>
                <span>info@themento.com</span>
              </div>
            </div>
          </li>
          <li>
            <div className="footer-contact">
              <div className="footer-contact-icon">
                <FaLocationDot className="ft-icon"/>
              </div>
              <div className="footer-contact-text">
                <span>آدرس </span>
                <span>کیان اباد خیابان 28شرقی پلاک 12</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
