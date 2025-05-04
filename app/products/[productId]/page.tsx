import React from 'react'
import ProductHeader from '@/app/productpagecomponents/Productheader'
import Productpagefooter from '@/app/productpagecomponents/Productpagefooter'
import ProductBanner from '@/app/productpagecomponents/ProductBanner'
import { getProductById } from '@/app/query/products/action'

async function page({ params }: { params: { productId: string } }) {
    
    const { productId } = await params;
    const productDetails = await getProductById(productId);
    console.log("productInfodetails", productDetails);


  return (
    <div className='overflow-hidden'>
        <ProductHeader />
        <ProductBanner productDetails = {productDetails} />
        <Productpagefooter />
    </div>
  )
}

export default page