import React from 'react';
import logo from "/public/logo1.png";
import  Link  from 'next/link';
import Image from 'next/image';
const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logo}    className='ml-5' 
      width={60}
      height={35}
      alt='logo1'
      />
       </Link>
  )
}
export default Logo
