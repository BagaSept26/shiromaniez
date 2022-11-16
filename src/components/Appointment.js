import React from 'react';

// import image
import DogImg from '../assets/img/foto/pv.png';

const Appointment = () => {
  return (
    <section id="booking" className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]'>
      <div className='container mx-auto'>
        <div className='lg:absolute lg:-top-32 lg:left-0 lg:right-0'>
          {/* image */}
          <div className='  hidden w-full max-w-[790px] mx-auto lg:flex justify-center'>
            <img src={DogImg} alt='' />
          </div>
          {/* form */}
          <form className='bg-yellow w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Booking Sekarang</h2>
            <input
              className='input-control'
              type='text'
              placeholder='Nama Anda'
            />
            <input
              className='input-control'
              type='email'
              placeholder='Email anda'
            />
            <input
              className='input-control'
              type='text'
              placeholder='Nomor Telepon'
            />
            <button className='btn w-full max-w-[514px]'>BOOKING</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
