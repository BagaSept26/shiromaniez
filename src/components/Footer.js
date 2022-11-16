import React from 'react';

// import logo
import Logo from '../assets/img/logo1.svg';

// import data
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-yellow py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row justify-between items-center text-white'>
          <a href='#'>
            <img src={Logo} alt=''
            width="100px"
            height="100px" />
          </a>
          <div></div>
          <div className=' text-[15px] text-black'>
            &copy; SHIROMANIEZ PETSHOP.
          </div>
          <div className='flex gap-x-4'>
            {social.map((item, index) => {
              return (
                <a href={item.href} key={index}>
                  <div className='bg-[#080706a9] hover:bg-[#FE8D71] w-10 h-10 rounded-full flex justify-center items-center transition'>
                    <div className='text-2xl'>{item.icon}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
