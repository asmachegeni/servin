import { NavLink } from "react-router-dom";
import "./Slide.css";
const Slide = ({
  title,
  text,
  src,
}: {
  title: string;
  text: string;
  src: any;
}) => {
  return (
    <div className="slide-container">
      <div className="slide-cover"></div>
      <img src={src} className="slide-img" />
      <h2 className="slide-title">{title}</h2>
      <p className="slide-text">{text}</p>
      <NavLink to={"/contact"} className={"slide-nav-link"}>تماس با ما</NavLink>
    </div>
  );
};

export default Slide;
