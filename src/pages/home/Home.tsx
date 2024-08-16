import "./Home.css";
import data from "./../../db.json";
import Colleague from "../../components/colleague/Colleague";
import Comments from "../../components/comments/Comments";
import Introduction from "../../components/introduction/Introduction";
import Slider from "../../components/slider/Slider";
import Statistics from "../../components/statistics/Statistics";
import Team from "../../components/team/Team";
import Service from "../../components/service/Service";
import Member from "../../components/member/Member";
import m1 from "./../../assets/member-imgs/aban1.jpg";
import m2 from "./../../assets/member-imgs/aban2.jpg";
import m3 from "./../../assets/member-imgs/aban3.jpg";
import m4 from "./../../assets/member-imgs/aban4.jpg";
import img1 from "./../../assets/services/img.svg";
import img2 from "./../../assets/services/img1.svg";
import img3 from "./../../assets/services/img2.svg";
import img4 from "./../../assets/services/img3.svg";
const Home = () => {
  const sources = [m1, m2, m3, m4];
  const imgServices = [img1, img2, img3, img4];
  return (
    <div className="home-container">
      <Slider slides={data.slides} />

      <div className="services-container">
        <h2 className="services-title">خدمات ما</h2>
        <div className="services-section">
          {data.services.map((item, index) => (
            <Service {...item} src={imgServices[index]} />
          ))}
        </div>
      </div>
      <Introduction />
      <Colleague />
      <Team />
      <div className="team-member-section">
        {data.members.map((member, index) => (
          <Member {...member} profile={sources[index]} />
        ))}
      </div>
      <div className="comment-count-section">
        <h2 className="comment-count-section-title">
          مشتریان درباره ما چه می‌گویند
        </h2>
        <Comments comments={data.comments} imgs={sources} />
        <Statistics />
      </div>
    </div>
  );
};

export default Home;
