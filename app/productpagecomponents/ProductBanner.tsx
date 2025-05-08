import React from 'react'
import Productbannerdetail from './Productbannerdetail'
import Productreviewsection from './Productreviewsection'
import Relatedproductssection from './Relatedproductssection'
import { ProductInfoResponse } from '../query/products/products.types'
import { useLoading } from '../store'

const ProductBanner = ({ productDetails}: { productDetails:  ProductInfoResponse}) => {
  const isLoading = useLoading(state => state.isLoading);

  return (
    <div className='lg:w-full lg:h-[3002.5px] lg:top-[97px] lg:pt-[32px] lg:pb-[96px] lg:px-[32px] lg:flex lg:flex-col lg:gap-[96px] lg:ml-[0] lg:pl-[24px] md:w-full md:h-[3,934.98px] md:top-[97px] md:px-[175.5px] md:left-[175.5px] md:pb-[96px] md:pl-[24px] md:flex md:flex-col md:gap-[96px] max-sm:w-full max-sm:h-[4,865px] max-sm:top-[97px] max-sm:pr-[16px] max-sm:pb-[64px] max-sm:pl-[16px] max-sm:gap-[64px]'>
      { !isLoading ?
        <Productbannerdetail {...productDetails} />
      : <div className='flex justify-center items-center'><h1>loading...</h1></div>}
      <Productreviewsection />
      <Relatedproductssection />
    </div>
  )
}

export default ProductBanner
