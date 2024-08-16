import './Service.css'
const Service = ({
  src,
  title,
  text,
}: {
  src: any;
  title: string;
  text: string;
}) => {
  return (
    <div className="service-container">
      <div className="service-img-container">
        <img src={src} alt="logo" className="service-img" />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">{text}</p>
    </div>
  );
};

export default Service;
