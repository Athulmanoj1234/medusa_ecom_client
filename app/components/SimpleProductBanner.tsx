import React from 'react'

const SimpleProductBanner = () => {
  return (
    <div className='lg:w-full lg:h-[794px] lg:pt-[128px] lg:pr-[32px] lg:pb-[128px] lg:pl-[32px] md:h-[794px] md:w-full md:pt-[128px] md:pr-[18px] md:pb-[128px] md:pl-[24px] lg:mt-[0px] max-sm:w-full max-sm:h-[802px] max-sm:pt-[96px] max-sm:pr-[16px] max-sm:pb-[96px] max-sm:pl-[16px]'>
      <div className="bg-[url('/simpleproduct-bg.jpeg')] bg-cover lg:w-full lg:h-[538px] lg:rounded-[8px] flex lg:justify-center lg:items-center md:w-full md:h-[538px] md:rounded-[8px] md:flex md:flex-col md:justify-center md:items-center md:pt-[160px] md:pb-[160px] md:pr-[60.5px] max-sm:w-full max-sm:h-[610px] rounded-[8px] max-sm:pt-[128px] max-sm:pb-[128px] max-sm:pl-[30px]">
         <div className='lg:w-full lg:h-[218px] lg:flex lg:flex-col lg:gap-[12px] text-white lg:justify-center lg:items-center md:w-[768px] md:flex md:flex-col md:justify-center md:items-center md:gap-[22px] max-sm:w-[320px] max-sm:h-[354px] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-[16px]'>
            <h2 className='text-[36px] leading-[40px] tracking-[-0.9px] font-bold  max-sm:text-[30px] max-sm:leading-[36px] max-sm:tracking-[-0.75px] max-sm:ml-[16px]'>Simple productivity</h2>
            <p className='lg:text-[20px] lg:leading-[28px] lg:tracking-[0] lg:font-normal lg:mt-[8px] md:font-normal md:leading-[28px] md:tracking-[0px] text-[20px] md:ml-[60px] max-sm:hidden'>{`Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're `}<span className='max-sm:hidden lg:ml-[3px]'><br className='max-sm:hidden md:block'/>{`doing our best here. No kanban boards, burndown charts, or tangled flowcharts `}</span><br className='max-sm:hidden'/><span className='lg:block md:block max-sm:hidden lg:ml-[44px] md:ml-[44px]'>with our Focus<br className='lg:hidden md:hidden max-sm:block'/> system. Just the undeniable<br className='lg:hidden md:hidden'/> urge to fill empty circles.</span></p>
            <p className='lg:hiddem md:hidden max-sm:text-[20px] max-sm:leading-[28px] max-sm:tracking-[0] font-normal ml-[15px]'>{`Endless tasks, limited hours, a`}<br /><span className='ml-[-8px]'> single piece of paper. Not really</span><br /><span className='ml-[8px]'>{` a haiku, but we're doing our`}</span><br /><span>{` best here. No kanban boards,`}</span><br /> <span className='ml-[4px]'>{`burndown charts, or tangled`}</span><br /> <span className='ml-[16px]'>flowcharts with our Focus</span><br /> <span className='ml-[7px]'>system. Just the undeniable</span><br /> <span className='ml-[20px]'>urge to fill empty circles.</span></p>
            <button className='bg-white text-black lg:text-[16px] lg:leading-[24px] lg:tracking-[0] font-medium lg:mt-[30px] lg:pt-[13px] lg:pr-[33px] lg:pb-[13px] lg:pl-[33px] lg:rounded-[8px] md:pt-[13px] md:pr-[33px] md:pb-[13px] md:pl-[33px] md:mt-4 md:rounded-[6px] max-sm:mt-[20px] max-sm:pt-[13px] max-sm:pr-[90.39px] max-sm:pb-[13px] max-sm:pl-[90.38px] max-sm:text-[16px] max-sm:leading-[24px] max-sm:tracking-[0] max-sm:rounded-[6px]'>Shop Focus</button>
         </div>
      </div>
    </div>
  )
}

export default SimpleProductBanner
