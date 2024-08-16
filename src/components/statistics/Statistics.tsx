import Counter from "./../counter/Counter";
import c1 from "./../../assets/counter/c1.svg";
import c2 from "./../../assets/counter/c2.svg";
import c3 from "./../../assets/counter/c3.svg";
import c4 from "./../../assets/counter/c4.svg";
import './Statistics.css'
const Statistics = () => {
  const info = [
    { title: "رضایت مشتری", count: 97, src: c1 },
    {
      title: "نیروی انسانی",
      count: 80,
      src: c2,
    },
    {
      title: "تجربه کاری",
      count: 100,
      src: c3,
    },
    {
      title: "پروژه های انجام شده",
      count: 121,
      src: c4,
    },
  ];
  return (
    <div className="statistics-container">
      {info.map((item) => (
        <Counter {...item} />
      ))}
    </div>
  );
};

export default Statistics;
