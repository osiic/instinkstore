"use client";

import { HomeSlide } from "./HomeSlide";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export function HomeSlider() {
  return (
    <section className="pt-11 pb-3 px-[4%]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide className="w-full h-[40%]">
          <HomeSlide
            bannerUrl="https://media.discordapp.net/attachments/885110057736474634/1122024371939192904/Rectangle_3.png"
            bannerName="Banner1"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[40%]">
          <HomeSlide
            bannerUrl="https://media.discordapp.net/attachments/885110057736474634/1122024372241190912/Rectangle_4.png"
            bannerName="Banner2"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[40%]">
          <HomeSlide
            bannerUrl="https://media.discordapp.net/attachments/885110057736474634/1122024372559954030/Rectangle_5.png"
            bannerName="Banner3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
