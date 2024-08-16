import Member from "../../components/member/Member";
import Team from "../../components/team/Team";
import bg from "./../../assets/slider/servin-3.jpg";
import data from "./../../db.json";
import m1 from "./../../assets/member-imgs/aban1.jpg";
import m2 from "./../../assets/member-imgs/aban2.jpg";
import m3 from "./../../assets/member-imgs/aban3.jpg";
import m4 from "./../../assets/member-imgs/aban4.jpg";
import Comments from "../../components/comments/Comments";
import Statistics from "../../components/statistics/Statistics";
import "./About.css";
const About = () => {
  const sources = [m1, m2, m3, m4];

  return (
    <div className="about-container">
      <div className="serv-header">
        <img src={bg} className="serv-img" />
        <div className="serv-box"></div>
        <h2 className="serv-title">درباره ما</h2>
      </div>
      <Team />
      <div className="team-member-section">
        {data.members.map((member, index) => (
          <Member {...member} profile={sources[index]} />
        ))}
      </div>
      <div className="about-section">
        <h2 className="about-title">چرا انتخاب شما شرکت ماست؟</h2>
        <p className="about-text">
          کاشی،به مفهومی وسیع تر،به هرواحد تقریبا کوچک ونازک با شکلی هندسی اطلاق
          می شودکه درتعدادزیادجهت پوشش سطوح مورداستفاده قرارمی گیرد.این بدان
          معنی است که کاشی لزوما ازجنس سرامیک نیست. کاشی های انعطاف پذیر وینیلی
          کف و پارکتهای چوبی دومثال بارز دراین زمینه هستند.بسیاری ازسنگهای طبیعی
          نظیر لوح های سنگی، سنگهای مرمر و مرمر رگه دار نیز مانند کاشی
          مورداستفاده قرارمی گیرند.نام دیگر این پوششها،سنگهای پرداخت
          شدهاست.برخلاف سنگ فرش های شیارداربااشکال، ابعاد وضخامتهای
          گوناگون،سنگهای پرداخت شده رابا اره های مخصوص به ابعادمختلف وبه دوصورت
          صیقلی یا زبر درمی آورند.کاشی های سیمانی نیزکه بسیارمشابه مدل سرامیکی
          خودهستند،نوع دیگری ازکاشی ها محسوب می شوند.
        </p>
      </div>
      <div className="comment-count-section-about">
        <h2 className="comment-count-section-title">
          مشتریان درباره ما چه می‌گویند
        </h2>
        <Comments comments={data.comments} imgs={sources} />
        <Statistics />
      </div>
    </div>
  );
};

export default About;
