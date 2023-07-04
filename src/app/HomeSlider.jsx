"use client";
import { HomeSlide } from "./HomeSlide";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export function HomeSlider({banners}) {
  return (
    <section className="px-[7%] ">
      <Swiper
      className="shadow-xl"
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

        {banners.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full aspect-[2/1] md:aspect-[20/7] rounded-md overflow-hidden"
          >
            <HomeSlide
              bannerUrl={item.attributes.image.data[0].attributes.url}
              bannerName={item.attributes.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
