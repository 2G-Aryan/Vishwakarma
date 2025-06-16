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
            Vishwakarma
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >

            Civil And Stone Work | Designing Luxury & Comfort for Your Home
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-500 gap-x-8"
        >
          <p>
            <b>  Crafting Luxury, One Stone at a Time </b> <br />
            At the heart of our brand lies an unwavering commitment to elegance, precision, and timeless beauty. <br /> We specialize in premium Michel Angelo Italian flooring solutions tailored for the most discerning clientele. Each space we create is a testament to artistry, material excellence, and refined design. <br />
            <br />
            <b> Double-Heighted Living Room with White Stone Details </b> <br />
            For those seeking breathtaking elegance, our white stone flooring in double-heighted living spaces offers unmatched opulence. The stone's luminosity, paired with soaring ceilings and natural light, creates a dramatic yet serene atmosphere—a hallmark of modern luxury living. <br />
          </p>
          <p>
            <b> Michel Angelo Italian Flooring </b> <br /> Sophisticated and luxurious, Michel Angelo Italian stone is known for its smooth textures, subtle veining, and polished elegance. Perfect for modern villas, upscale apartments, and designer homes, this flooring instantly elevates any interior with a sense of grandeur and class. <br />
            Quotation and Documentation: Experienced in preparing accurate measurement sheets and project cost estimations.<br />
            <br />
            <b> Living Room Flooring </b> <br />
            We design statement-making living rooms with flooring that reflects not only quality but also personal taste. Our selections range from subtle neutrals to bold marble patterns, each curated to complement luxury furnishings and contemporary layouts. <br />
          </p>
        </motion.div>
        <a href="/contact">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
           Contact Us 
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
            src="/img/balcany.jpeg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/bedroom.jpeg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/livingroom.jpeg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/p1.jpeg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/p5.jpeg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
           <SwiperSlide>
          <Image
            src="/img/p7.jpeg"
            alt="Swiper"
            width={520}
            height={520}
            className="w-full"
          />
        </SwiperSlide>
           <SwiperSlide>
          <Image
            src="/img/p2.jpeg"
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
