import React from 'react';
import logo from "/public/img/Navlogo.png";
import logoside from "/public/image/logoside.jpeg";
import  Link  from 'next/link';
import Image from 'next/image';
const Logo = () => {
  return (
    <Link href='/' className='flex'>
      <Image src={logo}    className='ml-5' 
      width={130}
      height={35}
      alt='logo1'
      />
      <Image 
      src={logoside}
      className='' 
      width={130}
      height={35}
      alt='logo'
      />
      
       </Link>
  )
}
export default Logo
