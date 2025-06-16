'use client'
import Image from 'next/image';
import {motion} from 'framer-motion';
import { titleVariants } from '@/utils/animation';
import { desVariants } from '@/utils/animation';
import { tagVariants } from '@/utils/animation';
const About = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        >
          <Image
            src="/img/aboutpic.jpeg"
            width={900}
            height={500}
            alt="About our company"
            className='max-md:hidden'
          />
        </motion.div>
        <div className="items-center">
          <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">Our Objective</motion.h2>
          <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="px-12 tracking-wider uppercase text-gray-400 mt-3">Civil and Stone work</motion.p>
          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="px-12 pb-4 mt-4">
         Our objective is to provide exquisite, high-quality natural stone flooring solutions that embody luxury, elegance, and timeless beauty. We are dedicated to serving discerning clients who seek nothing less than perfection, offering bespoke craftsmanship, exclusive materials, and unmatched attention to detail. Our goal is to transform prestigious spaces into masterpieces that reflect refined taste and enduring sophistication.
          </motion.p>
          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}className="text-muted-foreground">
            {/* Additional content to provide more details. */}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
