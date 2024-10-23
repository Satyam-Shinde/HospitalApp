import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ------ Left Side ------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br/> With Trusted Doctors</p>
        <p className='text-white text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br className='hidden sm:block'/> Necessitatibus consequatur nam, adipisci aliquam vero consequuntur!</p>
        <a className='flex items-center gap-2 bg-white px-6 py-1.5 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">
            Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* ------ Right Side ------ */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
