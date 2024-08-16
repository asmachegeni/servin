import "./Member.css";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Member = ({
  name,
  position,
  profile,
}: {
  name: string;
  position: string;
  profile: any;
}) => {
  return (
    <div className="member-container">
      <img src={profile} alt={`${name} profile`} className="member-profile" />
      <p className="member-name"> {name}</p>
      <p className="member-position">{position}</p>
      <div className="member-link">
        <div className="member-icon-cont">
          <BiLogoTelegram className="member-icon" />
        </div>
        <div className="member-icon-cont">
          <FaInstagram className="member-icon" />
        </div>
        <div className="member-icon-cont">
          <FaLinkedin className="member-icon" />
        </div>
      </div>
      
    </div>
  );
};

export default Member;
