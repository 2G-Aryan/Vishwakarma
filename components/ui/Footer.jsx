'use client';
import Link from 'next/link';
import { Input } from './input';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

export default function Footer() {
  return (
   

    <div className='bg-tertiary'>
    <div className='container lg:grid lg:grid-cols-2 py-2'>

        <div className='grid gap-4 text-left lg:pb-0 lg:grid-cols-3'>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Features</h2>
            <div className='flex flex-col'>
              <Link href='/about' className='py-1 hover:underline'>About us</Link>
              <Link href='/about' className='py-1 hover:underline'>Location</Link>
              <Link href='/gallery' className='py-1 hover:underline'>Gallery</Link>
              <Link href='/contact' className='py-1 hover:underline'>Contact</Link>
            </div>
          </motion.div>
          
         
          
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Connect</h2>
            <div className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>Instagram</Link>
              <Link href='/' className='py-1 hover:underline'>Twitter</Link>
              <Link href='/' className='py-1 hover:underline'>LinkedIn</Link>
              <Link href='/' className='py-1 hover:underline'>Facebook</Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
        >
          <p className='pb-4 text-xl font-semibold'>Stay Updated</p>
          <div className='relative lg:max-w-sm'>
            <Input type='email' id='email' placeholder='Email Address' />
            <button className='absolute bg-black text-white rounded-full h-10 px-3 text-sm top-1 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary'>
             <Link href='/contact'> Contact</Link> 
            </button>
          </div>
          <p className='pt-4 text-gray-500'>
           
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={desVariants}
        className='bg-black dark:bg-primary mt-0'
      >
        <div className='container text-white text-center lg:justify-between lg:flex py-4'>
          <div>
            <p>&copy;Vishwakarma Civil And Stone Work - All Rights Reserved</p>
          </div>
          <div>
            <Link className='p-4 hover:underline' href='/'>Terms</Link>
            <Link className='p-4 hover:underline' href='/'>Conditions</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
