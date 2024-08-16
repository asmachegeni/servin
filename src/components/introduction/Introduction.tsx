import image from "./../../assets/intro/servin-5.jpg";
import "./Introduction.css";
const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-right-side">
        <h2 className="intro-title"> چرا سروین؟ </h2>
        <p className="intro-text">
          اگر به دنبال یک طرح بسیار خاص برای تغییر دکوراسیون داخلی منزل خود
          هستید به شما پیشنهاد می‌دهیم به دنبال ایده‌های ناب بروید. ایده‌هایی
          خاص که هر فردی را بتواند تحت تاثیر خود قرار دهد. هنر کاشی کاری نیز یکی
          از ایده‌های بسیار خاص است که می‌تواند دکوراسیون داخلی خانه شما را
          زیباتر جلوه دهد. اگر شما هم برای تغییر دکوراسیون داخلی ایده‌ای دارید و
          یا تاکنون از هنر کاشی کاری برای منزل خود استفاده کرده‌اید می‌توانید
          پیشنهادات بسیار زیبای خود را درج کنید و قطعا ما از نظرات و پیشنهادات
          شما کمال استفاده را خواهیم داشت.
        </p>
      </div>
      <div className="intro-left-side">
        <div className="intro-box"></div>
        <img src={image} className="intro-img" />
      </div>
    </div>
  );
};

export default Introduction;
