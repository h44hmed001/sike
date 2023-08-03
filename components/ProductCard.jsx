import { getDiscountPercentage } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({name,originalPrice,discountedPrice,thumbnail,slug}) => {
  
  return (
    <Link href={`/products/${slug}`}>
    <div className='productCard w-[375px]'>
      <Image className='min-w-full shadow-xl transition-transform hover:scale-105 rounded-[50px] min-h-full object-cover' width={500} height={500} src={thumbnail}/>
      <div className='textBlock px-4 pt-3 flex justify-between items-center'>
        <div className='prices '>
            <div className='font-bold text-xl '>{name}</div>
        <div className='font-semibold text-gray-800 flex items-center gap-[8px]'>
            {discountedPrice&&<span>Rs. {discountedPrice}</span>}
            <span className='line-through text-sm'>Rs. {originalPrice}</span>
        </div>
        </div>
        {discountedPrice&&<div className='font-semibold text-green-500'>{parseInt(getDiscountPercentage(discountedPrice,originalPrice)) }% off</div>}
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
