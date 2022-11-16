import React from 'react';

// import image
import DogImg from '../assets/img/foto/pv.png';

const Contact = () => {
  return (
    <section className='bg-yellow-secondary bg pt-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-around'>
          {/* image */}
          <div className='order-1 lg:-order-1 lg:mt-16'>
            <img className='-mb-[12px]' src={DogImg} alt='' />
          </div>
          {/* text */}
          <div className='flex flex-col items-center justify-center'>
            <div className='text-orange font-semibold mb-3'>Contact</div>
            <div className='text-4xl text-blue font-extrabold'>
              +62 896-8667-1126
            </div>
            <div className='mb-7 text-blue'>
              Jam Operasional: Senin - Minggu: 09:00 - 21:00
            </div>
            <button className='btn'>Hubungi</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
