import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import "./Counter.css";
const Counter = ({
  src,
  title,
  count,
}: {
  src: any;
  title: string;
  count: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="counter-contanier">
      <img src={src} className="counter-img" />
      <ReactVisibilitySensor
        onChange={(e: any) => {
          setIsVisible(e);
        }}
      >
        <div   className="counter-number-con">
          +
          <CountUp
            start={isVisible ? 0 : undefined}
            delay={0.5}
            end={count}
            className="counter-number"
          />
        </div>
      </ReactVisibilitySensor>
      <p className="counter-title">{title}</p>
    </div>
  );
};

export default Counter;
