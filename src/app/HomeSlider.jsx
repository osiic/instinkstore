"use client";

import { HomeSlide } from "./HomeSlide";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export function HomeSlider() {
  return (
    <section className="pt-12 pb-3 px-[7%]">
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
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full aspect-[10/4] rounded-md overflow-hidden"
          >
            <HomeSlide
              bannerUrl="https://media.discordapp.net/attachments/885110057736474634/1122024371939192904/Rectangle_3.png"
              bannerName="Banner"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
