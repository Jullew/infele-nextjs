import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GoPerson } from "react-icons/go";
import { TbStarFilled, TbStarHalfFilled, TbStar } from "react-icons/tb";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialsSwiperDetails from "./TestimonialsSwiperDetails";

type Props = {};

function TestimonialsSwiper({}: Props) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
          },
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialsSwiperDetails
            avatar={<GoPerson />}
            name="Paweł Jajeśniak"
            source="Facebook"
            desc="Bardzo dobry kontakt, szybki czas realizacji oraz otwarci na
              potrzeby klienta. Bardzo polecam."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSwiperDetails
            avatar={<GoPerson />}
            name="Paweł Jajeśniak"
            source="Facebook"
            desc="Bardzo dobry kontakt, szybki czas realizacji oraz otwarci na
              potrzeby klienta. Bardzo polecam."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSwiperDetails
            avatar={<GoPerson />}
            name="Paweł Jajeśniak"
            source="Facebook"
            desc="Bardzo dobry kontakt, szybki czas realizacji oraz otwarci na
              potrzeby klienta. Bardzo polecam."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSwiperDetails
            avatar={<GoPerson />}
            name="Paweł Jajeśniak"
            source="Facebook"
            desc="Bardzo dobry kontakt, szybki czas realizacji oraz otwarci na
              potrzeby klienta. Bardzo polecam."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsSwiperDetails
            avatar={<GoPerson />}
            name="Paweł Jajeśniak"
            source="Facebook"
            desc="Bardzo dobry kontakt, szybki czas realizacji oraz otwarci na
              potrzeby klienta. Bardzo polecam."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialsSwiper;
