import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import s1 from "./../../assets/slider/servin-1.jpg";
import s2 from "./../../assets/slider/servin-3.jpg";
import s3 from "./../../assets/slider/servin-4.jpg";
import Slide from "../slide/Slide";

const Slider = ({ slides }: { slides: any[] }) => {
  const sources = [s1, s2, s3];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="sw1"
      autoplay={{ delay: 5000 }}
    >
      {slides.map((item, index) => (
        <SwiperSlide>
          <Slide {...item} src={sources[index]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
