import Link from 'next/link'
import React from 'react'

export interface CollectionCard {
  title: string,
  imageUrl: string,
  description: string;
}

const Collectioncard = ({ title, imageUrl, description }: CollectionCard) => {
  return (
    <Link href='' className='flex flex-col lg:gap-[10px] lg:mt-[27px] lg:w-[384px] lg:h-[548.8px] lg:rounded-[8px] md:w-[528px] md:h-[440px] max-sm:flex-col md:gap-[10px] max-sm:w-[528px] max-sm:h-[440px] max-sm:gap-[10px]'>
        <img src={imageUrl} alt="" className='lg:w-[384px] lg:h-[460.8px] lg:rounded-[8px] md:w-[528px] md:h-[352px] max-sm:w-[398px] max-sm:h-[238.66px] max-sm:rounded-[8px]' />
        <h3 className='font-semibold text-[16px] leading-[24px] tracking-[0] text-gray-900'>{title}</h3>
        <p className='max-sm:w-[354px] font-normal text-[14px] leading-[20px] tracking-[0] text-gray-500'>{description}</p>
    </Link>
  )
}

export default Collectioncard
