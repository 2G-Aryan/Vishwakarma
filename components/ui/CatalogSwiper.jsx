'use client'

import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./button";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import { titleVariants, tagVariants, desVariants } from "@/utils/animation";

const CatalogSwiper = () => {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
           Deepak
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            
            -Interior Designer | Designing Luxury & Comfort for Your Home
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-500 gap-x-8"
        >
          <p>
          Design Proficiency: Expertise in creating functional and aesthetic interior layouts.<br />
          Software Expertise: Proficient in AutoCAD for designing and drafting.<br />
          Site Supervision: Skilled in on-site measurements, project management, and ensuring design adherence during execution.
          </p>
          <p>
          Material Knowledge: Well-versed in the latest materials and their applications in modern interiors. <br />
          Quotation and Documentation: Experienced in preparing accurate measurement sheets and project cost estimations.<br />

          </p>
        </motion.div>
        <a href="/gallery">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            View Gallery
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CatalogSwiper;
