"use client"
import React from 'react';

const Banner = () => {
  //  const isMainMenuClicked = useMainMenu(state => state.isMainMenuClicked);
  //  console.log(isMainMenuClicked);

  return ( 
    <div className="lg:bg-[url('/frontpage-banner-lg.jpeg')] bg-cover h-screen lg:mt-[-60px] md:bg-[url('/frontpage-banner-md.jpeg')] max-sm:bg-[url('/frontpage-banner-sm.jpeg')] text-white flex flex-col lg:gap-5 md:gap-9 items-center justify-center lg:pt-[430px] lg:pr-13 md:pb-[280px] max-sm:pb-[180px] max-sm:pr-7 max-sm:w-full max-sm:gap-8 "> {/*mt-[-120px]*/} 
    {/* className='lg:hidden md:hidden max-sm:block'> */}
      <h1 className='lg:text-4xl font-bold md:text-6xl max-sm:text-[40px]'>New arrivals are <span className='max-sm:hidden'>here</span>
        <br className='lg:hidden md:hidden max-sm:block'/>
        <span className='lg:hidden md:hidden max-sm:block ml-28'>here</span>
      </h1>
      <p className='max-sm:hidden lg:block md:text-xl'>
        <span>The new arrivals have , well, newly arrived. Check out the latest options from our </span>
        <span className='md:hidden lg:hidden'>from our </span>
        <br className='lg:hidden'/>
        <span className='lg:ml-20 md:hidden lg:block'>summer smal-batch release while they're still in stock.</span>
        <span className='lg:hidden md:block ml-7'>from our summer smal-batch release while they're still in stock.</span>
      </p>
      <p className='lg:hidden md:hidden max-sm:block text-xl'>The new arrivals have , well, newly <br /><span className='ml-4'>arrived. Check out the latest</span><br /><span className='ml-2'>options from our summer small-</span><br /><span className='ml-1'>batch release while they're still in </span><br /><span className='ml-30'/>stock.</p>
      <button className='text-black bg-white py-2 px-8 rounded-lg md:px-18 md:py-6 max-sm:px-6 max-sm:text-xl md:text-3xl lg:text-xl lg:px-9 lg:py-3 lg:mt-2'>Shop New Arrivals</button>
    </div>
    
  )
}

export default Banner
