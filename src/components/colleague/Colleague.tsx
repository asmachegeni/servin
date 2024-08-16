import c1 from "./../../assets/colleague/saman.jpg";
import c2 from "./../../assets/colleague/logo@2x.png";
import c3 from "./../../assets/colleague/persian-01.png";
import c4 from "./../../assets/colleague/IMG_89412F-2C6471-25028E-E60253-9E1E6F-FB32EB.png";
import './Colleague.css'
const Colleague = () => {
  return (
    <div className="colleague-container">
      <h2 className="colleague-title">شرکت های همکار</h2>
      <div className="colleague-logos">
        <img src={c1} alt="logo" className="colleague-logo" />
        <img src={c2} alt="logo" className="colleague-logo" />
        <img src={c3} alt="logo" className="colleague-logo" />
        <img src={c4} alt="logo" className="colleague-logo" />
      </div>
    </div>
  );
};

export default Colleague;
