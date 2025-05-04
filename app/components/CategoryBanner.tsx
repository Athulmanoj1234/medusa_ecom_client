import Link from 'next/link'
import React from 'react'
import Categorycard from './Categorycard'
import categories from '../sampleapis/Categorycarddata.json'
// md:w-[1023px] md:h-[504px]

const CategoryBanner = () => {

  return (
    <div className='lg:w-full lg:h-[496px] lg:gap-[16px] lg:pt-[128px] lg:pr-[32px] lg:pl-[32px] flex flex-col md:w-full md:h-[604px] md:gap-[8px] md:pt-[128px] md:pl-[24px] md:pr-[24px] max-sm:w-full max-sm:h-[508px] max-sm:pt-[96px] max-sm:gap-[8px]'>
        <div className='lg:w-full lg:h-[32px] flex justify-between md:w-full md:h-[32px] max-sm:w-full max-sm:h-[32px]'>
            <h2 className='w-[202px] h-[32px] max-sm:max-w-[358px] font-bold'>Shop by Category</h2>
            <Link href='/category'><span className='text-indigo-600 w-[162px] h-[20px] max-sm:hidden'>Browse all categories →</span></Link>
        </div>
        {/* to pass dynamic data */}
        {/* <div className='lg:w-full lg:h-[320px] flex lg:gap-[2px] md:w-full md:h-[320px] md:mt-[8px] md:gap-[80px] max-sm:w-[500px] max-sm:h-[344px]'>  */}
            <div className='hidden lg:grid lg:grid-cols-5 md:grid md:grid-cols-2 lg:w-full lg:h-[420px] lg:gap-[2px] md:w-full md:h-[420px] md:mt-[8px] md:gap-[80px] overflow-x-auto overflow-y-hidden hide-scrollbar'>
                { categories?.map((category, index) => ( 
                <Categorycard 
                 key={index}
                 title={category.title}
                 image={category.image}
                 className={index >=3 ? 'block md:hidden' : ''} 
                 />
            ) )} 
            </div>
            
            <div className='md:hidden w-full overflow-x-auto overflow-y-hidden hide-scrollbar'>
                <div className='flex gap-4 pb-4 pl-2 pr-8'>
                    { categories.slice(0, 4).map((category, index) => (
                        <Categorycard 
                          key={index}
                          title={category.title}
                          image={category.image}
                          className='min-w-[240px]'
                          />
                    )) }
                </div>
            </div>
        
        <Link href='/category'><span className='text-indigo-600 w-[162px] h-[20px] lg:hidden md:hidden'>Browse all categories →</span></Link>
    </div>
    )
}

export default CategoryBanner
