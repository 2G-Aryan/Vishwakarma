'use client'

import { Button } from "./button";
import { TbArrowUpRight } from 'react-icons/tb';
import Image from "next/image";
import { titleVariants, desVariants, tagVariants } from '@/utils/animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center md:bg-fixed lg:bg-contain"
      style={{ backgroundImage: `url('/images/p1.jpg')` }}

    >
    <div className="flex items-center justify-center min-h-screen px-12 pb-5 -mt-8">
      <div className="container text-center lg:text-left lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="tracking-widest uppercase font-mono"
          >
            Offer for the best Interior
          </motion.p>

          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="h1 text-black   font-extrabold italic"
          >
          TURNING HOUSE <br /> INTO HOMES
          </motion.h1>

          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="pb-6 text-muted-foreground xl:pb-10"
          >
            {/* Content goes here */}
          </motion.p>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            {/* Button placed below the content */}
            <Button
              className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
              aria-label="Book now"
            >
              Book now <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        <div className="w-1/2">
          {/* <Image
            src="/images/p3.jpg"
            width={800}
            height={500}
            alt="Hall Interior"
            className="lg:h-[344px] lg:w-[500px] hidden lg:block rounded-full"
          /> */}
        </div>
      </div>
    </div>
     </div>
  );
};

export default HeroSection;
