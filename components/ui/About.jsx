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
            src="/images/p5.jpg"
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
          className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">Objective</motion.h2>
          <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="px-12 tracking-wider uppercase text-gray-400 mt-3">Interior Designer</motion.p>
          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="px-12 pb-4 mt-4">
           Creative and detail-oriented Interior Designer with extensive experience in AutoCAD, site supervision, and material selection. Leveraging a strong understanding of design principles and a family-rooted passion for interior design, I aim to deliver exceptional spaces that align with client visions and modern trends.
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
