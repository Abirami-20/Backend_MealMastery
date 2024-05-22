import React from 'react'
import banner1 from '../images/Banner1.jpg'
import banner2 from '../images/Banner2.jpg'
import banner3 from '../images/Banner3.jpg'
import banner4 from '../images/Banner__4.webp'
import banner5 from '../images/Banner5.jpg'
import banner6 from '../images/Banner6.jpg'
import banner7 from '../images/Banner7.jpg'

const Header = () => {
    const images=[banner1,banner2,banner3,banner4,banner5,banner6,banner7]
  return (
    <div className='w-full h-[100vh]'>
     <div className='relative w-full h-full'>
     <img src={images[Math.floor(Math.random() * images.length)]}
          alt='Recipes'
          className='w-full h-full object-cover'
        />
     </div>
     <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 '>
         <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>Unlock Culinary Brilliance with <br></br>Meal Mastery </h1>
         <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full '>Welcome to MealMastery, where every recipe is a new culinary adventure! 
              <br className='hidden md:block' /> Discover a treasure trove of
              delectable recipes from around the globe.</p>
     </div>
    </div>
  )
}

export default Header