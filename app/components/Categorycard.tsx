import React from 'react'

export interface CardProps {
    title: string;
    image: string;
    className: string;
}

const Categorycard = ({ title, image, className = '' }: CardProps) => {
  return (
    <div className={`max-sm:w-[224px] max-sm:h-[320px] max-sm:mt-[8px] max-sm:pl-[8px] max-sm:flex max-sm:gap-[40px] rounded-[8px] lg:rounded-[8px] lg:w-[217.59px] lg:h-[320px] lg:p-[24px] md:h-[320px] md:pt-[24px lg:block md:p-[24px] max-sm:relative ${className}`}>
        <div className="max-sm:w-full max-sm:h-[500px] rounded-[8px] max-sm:p-[24px] lg:w-full lg:h-[213.33px] md:w-[270px] flex flex-col items-center relative">
            <img src={image} alt="" className='max-sm:relative ' />
            <p className='font-bold max-sm:mt-[220px] lg:mt-[200px] text-[20px] leading-[28px] tracking-[0] md:mt-[330px] absolute'>{title}</p>
            {/*  md:text-center */}
        </div>
    </div>
   )
}

export default Categorycard
 
/*  <div className={`max-sm:w-[224px] max-sm:h-[320px] max-sm:mt-[8px] max-sm:pl-[8px] max-sm:flex max-sm:gap-[40px] max-sm:rounded-[8px] lg:rounded-[8px] lg:w-[217.59px] lg:h-[320px] lg:p-[24px] md:h-[320px] md:rounded-[8px] md:pt-[24px lg:block md:p-[24px] max-sm:relative ${className}`}>
        <div className="max-sm:w-full max-sm:h-[500px] max-sm:rounded-[8px] max-sm:p-[24px] lg:w-full lg:h-[213.33px] md:w-[270px]">
            <img src={image} alt="" className='' />
                <p className='font-bold max-sm:mt-[-40px] max-sm:ml-[50px] lg:mt-[-40px] lg:ml-7 text-[20px] leading-[28px] tracking-[0] md:mt-[-60px] md:ml-[85px] max-sm:absolute left-[10px]'>{title}</p>
        </div>
    </div> */