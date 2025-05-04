import React from 'react'

const LevelBanner = () => {
    // lg:bg-[url('/level-hero.jpeg')]
  return (
    <div className='lg:w-full lg:h-[666px] lg:pt-[128px] lg:pr-[32px] lg:pl-[32px] md:w-full md:h-[666px]  md:top-[496px] md:pt-[128px] md:pr-[24px] md:pl-[24px] max-sm:w-full max-sm:h-[742px] max-sm:max-w-[1280px] max-sm:pt-[96px] max-sm:px-[16px]'>
      <div className="bg-[url('/level-banner-lg.jpeg')] bg-cover lg:h-full lg:w-full rounded-[8px] flex lg:justify-center lg:items-center text-white md:w-full md:h-[538px] md:rounded-[8px] md:px-[224px] md:py-[160px] flex-col items-center justify-center max-sm:w-full max-sm:h-[646px] max-sm:pt-[128px] max-sm:pb-[128px] max-sm:px-[24px]" >
        <div className='lg:top-0 lg:left-0 lg:w-full lg:h-full flex flex-col items-center justify-center text-white lg:gap-[14px] md:w-[768px] md:h-[218px] md:gap-[10px] max-sm:w-[310px] max-sm:h-[390px] max-sm:max-w-[768px] max-sm:gap-[16px]'>
            <h2 className='font-bold lg:text-4xl text-white brightness-100 filter-none md:font-[700px] font-inter text-[36px] leading-[40px] tracking-[-0.9px] flex items-center justify-center text-center'>Level up<br className='lg:hidden md:hidden'/>your desk</h2>
            <p className='font-inter font-normal text-[20px] leading-[28px] tracking-[0]  max-sm:hidden'>Make your desk beautiful and organized. Post a picture to social media and <br className='max-sm:hidden'/><span className=''>watch it get more likes than life-changing announcements. Reflect on the </span><br className=''/><span className='max-sm:hidden ml-3.5'>shallow nature of existence. At least you have a really nice desk setup</span></p>
            <p className='lg:hidden md:hidden max-sm:text-[20px] max-sm:leading-[28px] max-sm:tracking-[0] font-inter font-normal'>Make your desk beautiful and<br /><span className='ml-[10px]'>organized. Post a picture to</span><br /><span className='ml-[4px]'>social media and watch it get</span><br /><span className='ml-[4px]'>more likes than life-changing</span><br /><span className='ml-[-5px]'>announcements. Reflect on the</span><br /><span className='ml-[-2px]'>shallow nature of existence. At</span><br /><span className='ml-[14px]'>least you have a really nice</span><br /><span className='ml-[80px]'>desk setup.</span></p>
            <button className='lg:w-[196px] lg:h-[50px] lg:rounded-[6px] lg:pt-[13px] lg:pr-[33px] lg:pb-[13px] lg:pl-[33px] bg-white text-black lg:mt-[21px] font-medium md:w-[196px] md:h-[50px] md:rounded-[6px] md:pt-[13px] md:pr-[33px] md:pb-[13px] md:pl-[33px] font-inter md:text-[16px] leading-[24px] tracking-[0] md:mt-5 max-sm:mt-[20px] max-sm:pt-[13px] max-sm:pr-[69.95px] max-sm:pb-[13px] max-sm:pl-[69.94px] rounded-[6px] max-sm:text-[16px] max-sm:leading-[24px] max-sm:tracking-[0]'>Shop Workspace</button>
        </div>     
      </div>
      {/* <div className='flex flex-col lg:w-[768px] lg:h-[218px] text-white lg:gap-[20px] lg:mt-[-90px]'> */}
        
    {/* </div> */}
      
    </div>
  )
}

export default LevelBanner
