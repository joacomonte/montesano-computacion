/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module style
import "swiper/css/pagination"; // Pagination module style
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getHeroImgs } from "@/lib/getHeroImgs";

const HeroSlider: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeroImgs();
      console.log(data);
      setImages(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full mt-[100px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index} className="h-full">
            <img alt={`Image ${index}`} className="!object-contain h-full w-full" src={imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
