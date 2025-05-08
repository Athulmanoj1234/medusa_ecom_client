"use client"
import React, { useEffect, useState } from 'react'
import ProductHeader from '@/app/productpagecomponents/Productheader'
import Productpagefooter from '@/app/productpagecomponents/Productpagefooter'
import ProductBanner from '@/app/productpagecomponents/ProductBanner'
import { getProductById } from '@/app/query/products/action'
import { useParams } from 'next/navigation'
import { ProductInfoResponse } from '@/app/query/products/products.types'
import { useLoading } from '@/app/store'

export interface PageProps {
  params: {
    productId: string
  }
}

function Page() {
    const params = useParams();
    const productId = params.productId;

    const [productDetails, setProductDetails] = useState<ProductInfoResponse>();
    const [isLoading, setLoading] = useState(true);

    const stopLoading = useLoading(state => state.stopLoading);

    useEffect(() => {
      async function fetchUserInfo() {
        const productDetails = await getProductById(productId);
        setProductDetails(productDetails);
        stopLoading();
      }
      fetchUserInfo();
      
    }, [productId]);
    console.log("productInfodetails", productDetails);


  return (
    <div className='overflow-hidden'>
        <ProductHeader />
        {/* { isLoading && ( 
        <div>
          loading...
        </div>
        ) } */}
        
          <ProductBanner productDetails = {productDetails!} 
          />
        
        <Productpagefooter />
    </div>
  )
}

export default Page