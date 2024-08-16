import Service from "../../components/service/Service";
import data from "./../../db.json";
import img1 from "./../../assets/services/img.svg";
import img2 from "./../../assets/services/img1.svg";
import img3 from "./../../assets/services/img2.svg";
import img4 from "./../../assets/services/img3.svg";
import bg from './../../assets/slider/servin-4.jpg'
import "./Services.css";
const Services = () => {
  const imgServices = [img1, img2, img3, img4];
  return (
    <div className="serv-container">
      <div className="serv-header">
        <img src={bg} className="serv-img"/>
      <div className="serv-box"></div>
        <h2 className="serv-title">خدمات ما</h2>
      </div>
      <div className="services-container">
        <div className="services-section">
          {data.services.map((item, index) => (
            <Service {...item} src={imgServices[index]} />
          ))}
        </div>
      </div>
      <div className="services-container">
        <div className="services-section">
          {data.services.map((item, index) => (
            <Service {...item} src={imgServices[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
