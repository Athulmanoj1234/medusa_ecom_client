"use client"
import React, { useEffect, useState } from 'react'
import Relatedproductscard from './Relatedproductscard'
import relatedProductsData from '../sampleapis/Ralatedproductsdata.json'
import { getRelatedProducts } from '../query/products/action';
import { ProductInfoResponse } from '../query/products/products.types';
import Link from 'next/link';
import { clientUrl } from '../contants';

const Relatedproductssection =  ({productId}: {productId: string}) => {

  const [relatedProductsInfo, setRelatedProductsInfo] = useState<ProductInfoResponse[]>();
   
  console.log("related id", productId);

  const handleProductVisit = (productId: string) => {
    window.location.href = `${clientUrl}/products/${productId}`
  }
  
    
  useEffect(() => {
    async function fetchRelatedProducts() {
      if (productId) {
        const relatedProducts = await getRelatedProducts(productId);
        setRelatedProductsInfo(relatedProducts);
      }
    }

    fetchRelatedProducts();
  }, [productId]);
  
  console.log("related data:", relatedProductsInfo);

  

  return (
    <div className='lg:flex lg:flex-col lg:w-full lg:h-[432.5px] lg:gap-[24px] lg:ml-[0] md:flex md:flex-col md:w-[624px] md:alif md:h-[812px] md:ml-[67px] md:mt-[-50px] md:gap-[24px] max-sm:w-[358px] max-sm:h-[1846px] max-sm:flex max-sm:flex-col max-sm:gap-[24px] max-sm:bt-[1px] border-gray-200 max-sm:mt-[-40px] max-sm:py-[50px]'>
      <h2 className='lg:w-full lg:h-28px font-medium text-[18px] leading-[28px] tracking-[0%] align-middle text-gray-900 md:w-full md:h-[28px] md:text-[18px] md:leading-[28px] md:tracking-[0%] md:align-middle max-sm:w-[358px] max-sm:h-[28px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[0%] max-sm:align-middle'>Customers also purchased</h2>
      <div className='lg:w-full lg:h-[380.5px] lg:flex lg:justify-between md:w-full md:h-[760px] md:grid md:grid-cols-2 md:grid-rows-2  md:gap-x-8 md:gap-y-[100px] max-sm:flex max-sm:flex-col max-sm:gap-[40px] max-sm:w-[358px] max-sm:h-[1794px] max-sm:ml-[20px]'>
      { relatedProductsInfo?.slice(0, 5).map((product: ProductInfoResponse, index) => (
      <button onClick={() => handleProductVisit(product?.id)}>  
        <Relatedproductscard 
          key={index}
          id={product.id}
          title={product.title}
          product_image={product.product_image}
          price={product.price}
          product_colors={product.product_colors}    
          />
        </button>
      ))}  
      </div>
    </div>
  )
}

export default Relatedproductssection
