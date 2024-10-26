import React from 'react'
import heroImg from '../assets/heroImg.jpg';
import { CustomCarousel } from './custom-carousel';

//   import { Carousel, CarouselSlide } from '@shadcn/ui';
  

const LandingPage = () => {
  return (
    <>
        <main>
            <section className="hero w-full min-h-[35rem] bg-[linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)] animate-[gradient_15s_ease_infinite] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 p-4 px-7"  style={{
        '@keyframes gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }}>

        <h1 className='font-bold w-full md:w-[50%] text-[3rem] md:text-[5rem] text-white' >CALCULATE YOUR CARBON FOOTPRINT</h1>
        <img className='w-full md:w-[50%] rounded-3xl' src={heroImg} alt="hero image" />

      </section>
      
      <CustomCarousel/>

        </main>
    </>
  )
}

export default LandingPage
