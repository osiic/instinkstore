import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export function HomeSlide({ bannerUrl, bannerName }) {
  return (
    <Image
      src={bannerUrl}
      width={1000}
      height={400}
      alt={bannerName}
      className="w-full h-[110%] rounded-md object-cover scale-110"
    />
  );
}
