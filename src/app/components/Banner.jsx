// Import React
"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Banner = () => {

  return (

    <div className="max-w-[840px] bg-[#f2f2f2]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={
          true}
      
       
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Image
              src="/Images/mobile.jpg"
              alt="Banner 1"
              width={620}
              height={620}
              className="w-full h-[400px] object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div>
            <Image
              src="/Images/3162678_14931.jpg"
              alt="Banner 1"
              width={620}
              height={620}
              className="w-full h-[400px] object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
           <div>
            <Image
              src="/Images/8403.jpg"
              alt="Banner 1"
              width={620}
              height={620}
              className="w-full h-[400px] object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
            <Image
              src="/Images/t5.jpg"
              alt="Banner 1"
              width={620}
              height={620}
              className="w-full h-[400px] object-cover"
              priority
            />
          </div>
        </SwiperSlide>

      
      </Swiper>
    </div>
  );
};

export default Banner;
