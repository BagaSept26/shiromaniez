import React from 'react';

// import icons
import PhoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return (
    <div>
      <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
        <img
          className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
          src={PhoneIcon}
          alt=''
        />
        <div className='lg:text-[23px] text-blue font-extrabold'>
          +62 896-8667-1126
        </div>
      </div>
      <div className='text-sm'>
        <div className='hidden lg:flex'>
          Jam Pelayanan: Senin - Minggu: 9 pagi - 9 malam
        </div>
        <div className='lg:hidden text-right'>Senin - Minggu: 09:00 - 21:00</div>
      </div>
    </div>
  );
};

export default Program;
