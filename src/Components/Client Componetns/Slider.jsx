import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { useEffect, useState } from "react";


const Slider = () => {
    // data fetch form api.
    const[sliderImg,setSliderImg]=useState({})
    useEffect(()=>{
        fetch("https://rifinalshop-lw5sl7gf8-saifuls-projects-92f6e13c.vercel.app/mysite")
        .then(res=>res.json())
        .then(data=>setSliderImg(data))
    },[])


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src={sliderImg.banner1}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src={sliderImg.banner2}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src={sliderImg.banner3}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
