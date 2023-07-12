import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/Testimonial/Testimonial.css";
import ProfilePic1 from "../../assets/img/profile1.jpg";
import ProfilePic2 from "../../assets/img/profile2.jpg";
import ProfilePic3 from "../../assets/img/profile3.jpg";
import ProfilePic4 from "../../assets/img/profile4.jpg";
import { useSelector } from "react-redux";
const Testimonial = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  const client = [
    {
      img: ProfilePic1,
      reviews:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ",
    },
    {
      img: ProfilePic2,
      reviews:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ",
    },
    {
      img: ProfilePic3,
      reviews:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ",
    },
    {
      img: ProfilePic4,
      reviews:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span style={{ color: darkMode ? "#fff" : "" }}>
          Clients Alwayes get
        </span>
        <span>Exceptional Work</span>
        <span style={{ color: darkMode ? "#fff" : "" }}>from me....</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "#89f596" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}>
        {client.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="tesimonial">
                <img src={client.img} alt="" />
                <span style={{ color: darkMode ? "#fff" : "" }}>
                  {client.reviews}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
