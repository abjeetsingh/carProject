import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img01.jpg)`,
            }}
          >
            <div className="h-screen bg-black/60 z-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> First Class . WorldWide</p>
                <p className="text-2xl font-light text-white ">
                  A chauffer Service for Any Purpose
                </p>
                <Link href="/booking">
                  <button
                    type="button"
                    onClick="/booking"
                    className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                  >
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img02.jpg)`,
            }}
          >
            <div className="h-screen bg-black/40 z-10  ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> First Class . WorldWide</p>
                <p className="text-2xl font-light text-white ">
                  A chauffer Service for Any Purpose
                </p>
                <Link href="/booking">
                  <button
                    type="button"
                    onClick="/booking"
                    className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                  >
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img03.jpg)`,
            }}
          >
            <div className="h-screen bg-black/40 z-10  ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white "> First Class . WorldWide</p>
                <p className="text-2xl font-light text-white ">
                  A chauffer Service for Any Purpose
                </p>
                <Link href="/booking">
                  <button
                    type="button"
                    onClick="/booking"
                    className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                  >
                    BOOK NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
