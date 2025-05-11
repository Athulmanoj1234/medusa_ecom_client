import React from 'react'
import Productreviewcard from './Productreviewcard'
import ProductreviewData from '../sampleapis/Productreviewdata.json'


const Productreviewsection = () => {
    return (
        <div className='lg:w-full lg:h-[700px] lg:flex lg:flex-col lg:gap-[24px] lg:mt-[235px] lg:ml-[0] md:w-full md:h-[940px] md:flex md:flex-col md:gap-[12px] max-sm:w-full max-sm:h-[1080px] max-sm:flex max-sm:flex-col max-sm:gap-[24px] md:ml-[67px]'>
            <h2 className='lg:w-[1216px] lg:h-[28px] text-gray-900 font-medium lg:text-[18px] lg:leading-[28px] lg:tracking-[0px] lg:align-middle md:w-[624px] md:h-[28px] md:text-[18px] md:leading-[28px] md:tracking-normal md:align-middle max-sm:w-[358px] max-sm:h-[28px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-normal max-sm:align-middle'>Recent reviews</h2>
            
            { ProductreviewData?.map((review, index) => (
                <Productreviewcard 
                key={index}
                userName={review.name}
                time={review.time}
                ratingCount={review.rating}
                heading={review.heading}
                summary={review.summary}
                />
             ) ) } 
        </div>
            )
}

export default Productreviewsection
