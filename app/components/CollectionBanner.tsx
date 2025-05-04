import Link from 'next/link'
import React from 'react'
import Collectioncard from './Collectioncard';
import collectioncard from '../sampleapis/Collectioncarddata.json'

const CollectionBanner = () => {

  return (
    <div className='lg:w-full lg:h-[788.8px] lg:pt-[128px] lg:pr-[32px] lg:pl-[32px] lg:flex lg:flex-col lg:gap-[10px] md:h-[1660px] md:pt-[100px] md:pl-[150px] md:flex md:flex-col md:gap-[10px] md:pr-[150px] max-sm:w-[390px] max-sm:h-[1331.97px] max-sm:max-w-[576px] max-sm:pt-[60px] max-sm:pl-[16px] max-sm:pr-[16px]  max-sm:flex max-sm:flex-col max-sm:gap-[13px]'>
      <h2 className='font- inter font-bold text-[24px] md:font-bold md:text-[24px] md:leading-[32px] md:tracking-[-0.6px] md:align-middle max-sm:font-bold max-sm:text-[24px] max-sm:leading-[32px] max-sm:tracking-[-0.6px]'>Shop by Collection</h2>
      <p className='text-gray-500 md:font-inter md:font-bold md:text-[16px] md:leading-[32px] md:tracking-[-0.6px] md:align-middle max-sm:font-normal max-sm:text-[16px] max-sm:leading-[24px] max-sm:tracking-normal'>each sesson, we collaborate with world class designers to create a collection inspired by the natural world.</p>
      <div className='flex lg:flex-row md:flex-col md:mt-[20px] lg:w-full md:w-full md:h-[1396px] md:gap-[48px] md:mr-[100px] md:items-center max-sm:h-[1075px] max-sm:mt-[20px] max-sm:flex-col max-sm:gap-[48px] max-sm:w-[400px] lg:justify-between'>
        {collectioncard?.map((collection, index) => (
         <Collectioncard 
           title={collection.title}
           imageUrl={collection.image}
           description={collection.description}
          />
        ))}
      </div>
    </div>
  )
}

export default CollectionBanner
