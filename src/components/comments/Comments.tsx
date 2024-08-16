import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Comment from "../comment/Comment";
import "./Comments.css";
const Comments = ({ comments, imgs }: { comments: any[]; imgs: any[] }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="sw2"
      >
        {comments.map((item, index) => (
          <SwiperSlide>
            <Comment {...item} src={imgs[index]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;
