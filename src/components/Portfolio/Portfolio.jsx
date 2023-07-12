import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import Hoc from "../../assets/img/hoc.png";
import Musicapp from "../../assets/img/musicapp.png";
import "../../assets/css/Portfolio/Portfolio.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
const Portfolio = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "#fff" : "" }}>Recent Project</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="portfolio-slider">
        <SwiperSlide>
          <img src={Sidebar} alt="portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hoc} alt="portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Musicapp} alt="portfolio" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
