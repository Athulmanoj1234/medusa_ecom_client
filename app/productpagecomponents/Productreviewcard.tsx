import React from 'react'
import { CiStar } from "react-icons/ci";

export interface ProductReviewData {
    userName: string;
    time: string;
    ratingCount: number;
    heading: string;
    summary: string;
}

const Productreviewcard = ({ userName, ratingCount, time, heading, summary }: ProductReviewData) => {
  return (
    <div className='border-gray-200 lg:w-full lg:h-[648px] lg:border-t-[1px] lg:pt-[1px] lg:flex lg:flex-col lg:gap-[40px] lg:pb-[20px] md:border-t md:pt-[1px] md:flex md:flex-col md:gap-[20px] max-sm:border-t max-sm:flex max-sm:flex-col max-sm:gap-[40px]'>
        <div className='lg:flex lg:flex-row lg:w-full lg:h-[196px] lg:pt-[40px] lg:justify-between lg:gap-[32px] md:w-full md:h-[278px] md:pt-[40px] md:flex md:flex-col max-sm:w-full max-sm:h-[316px] max-sm:flex max-sm:flex-col max-sm:pt-[40px] max-sm:gap-[12px]'>
            <div className='lg:w-[280px] lg:h-[156px] lg:pb-[108px] lg:flex lg:flex-col lg:gap-2 lg:order-0 max-sm:w-[358px] max-sm:h-[20px] max-sm:flex max-sm:gap-4 md:w-[624px] md:h-[20px] md:flex md:mt-[-25px]  md:gap-4 md:order-1 max-sm:order-1 max-sm:mt-[-30px]'>
                <p className='lg:w-[61px] lg:h-[20px] lg:text-[14px] lg:leading-[20px] lg:tracking-[0px] lg:align-middle text-gray-900 md:w-[61px] md:h-[20px] font-medium md:text-sm md:leading-5 md:tracking-normal md:align-middle max-sm:text-sm max-sm:leading-5 max-sm:tracking-normal max-sm:align-middle max-sm:w-[66px]'>{userName}</p>
                {/* dateTime for machine readable for browsers screen readers and seo */}
                <time dateTime="2021-05-16" className='lg:w-[130px] lg:h-[28px] lg:pt-[8px] text-gray-500 font-normal lg:text-sm lg:leading-5 lg:border-0 lg:ml-[-16px] lg:tracking-normal lg:align-middle md:w-[120px] md:h-[20px] md:pl-[16px] md:border-l-[1px] md:border-gray-200 max-sm:border-gray-200 max-sm:w-[220px] max-sm:h-[20px] max-sm:pl-[16px] max-sm:border-l-[1px] md:mt-[-3px] max-sm:mt-[-3px]'>{time}</time>
            </div>
            <div className='lg:w-[904px] lg:h-[156px] lg:flex lg:flex-row lg:gap-[32px] md:w-[624px] md:h-[192px] md:flex md:flex-col md:gap-[16px] max-sm:w-[358px] max-sm:h-[232px] max-sm:flex max-sm:flex-col max-sm:gap-[16px]'>
                <div className='lg:w-[280px] lg:h-[20px] lg:flex lg:gap-[2px] md:w-[624px] md:h-[20px] md:flex md:gap-[2px] max-sm:w-[358px] max-sm:h-[20px] max-sm:flex max-sm:gap-[2px]'>
                    <div className='lg:w-[100px] lg:h-[20px] lg:flex lg:gap-[2px] md:w-[100px] md:h-[20px] md:flex md:gap-[2px] max-sm:w-[100px] max-sm:h-[20px] max-sm:flex max-sm:gap-[2px]'>
                        { Array.from(Array(ratingCount), (e, i) => {
                            return <CiStar key={i} className='text-yellow-400 lg:w-[16.63px] lg:h-[15.91px] lg:mt-[2.3px] lg:ml-[1.68px] md:w-[16.63px] md:h-[15.91px] md:mt-[2.3px] md:ml-[1.68px] max-sm:w-[16.63px] max-sm:h-[15.91px] max-sm:top-[2.3px] max-sm:left-[1.68px]' />
                            } ) }
                    </div>
                    <p className='lg:w-[21px] lg:h-[20px] lg:pl-[12px] text-gray-700 font-normal lg:text-sm lg:leading-5 lg:tracking-normal lg:align-middle md:text-sm md:leading-5 md:tracking-normal md:align-middle md:w-[21px] md:h-[20px] md:pl-[12px] md:mt-[-1px] md max-sm:w-[21px] max-sm:h-[20px] max-sm:pl-[12px] max-sm:text-sm max-sm:leading-5 max-sm:tracking-normal max-sm:align-middle max-sm:mt-[-2px]'>{ratingCount}</p>
                </div>
                <div className='lg:w-[592px] lg:h-[156px] lg:flex lg:flex-col lg:gap-3 md:w-[624px] md:h-[156px] md:gap-[12px] md:flex md:flex-col max-sm:flex max-sm:flex-col max-sm:w-[358px] max-sm:h-[196px] max-sm:gap-[12px]'>
                    <h2 className='lg:w-[592px] lg:h-[20px] text-gray-900 font-normal lg:text-sm lg:leading-5 lg:tracking-normal lg:align-middle md:w-[624px] md:h-[20px] max-sm:w-[358px] max-sm:h-[20px] md:text-sm md:leading-5 md:tracking-normal md:align-middle max-sm:text-sm max-sm:leading-5 max-sm:tracking-normal max-sm:align-middle'>{heading}</h2>
                    {/* <div className='lg:w-[592px] lg:h-[124px] lg:flex lg:flex-col lg:gap-[24px] max-sm:w-[358px] max-sm:h-[164px] md:w-[624px] md:h-[124px] md:flex md:flex-col md:gap-[24px] max-sm:flex max-sm:flex-col max-sm:gap-[24px]'> */}
                    <p className='lg:w-full lg:h-[40px] text-gray-500 font-normal lg:text-sm lg:leading-5 lg:tracking-normal lg:align-middle max-sm:w-[358px] max-sm:h-[60px] max-sm:text-sm max-sm:leading-5 max-sm:tracking-normal max-sm:align-middle md:w-[624px] md:h-[40px] md:text-sm md:leading-5 md:tracking-normal md:align-middle'>{summary}</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productreviewcard
