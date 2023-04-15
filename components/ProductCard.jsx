import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    <Link href="/products/1">
    <div className='productCard w-[375px]'>
      <img className='w-full shadow-xl transition-transform hover:scale-105 rounded-[50px] h-ful object-contain' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c18c97f3-73c9-4fe8-aeb3-81cbc1b53568/air-max-270-go-little-kids-easy-on-off-shoes-7XNmw3.png"/>
      <div className='textBlock px-4 pt-3 flex justify-between items-center'>
        <div className='prices '>
            <div className='font-bold text-xl '>Product Name</div>
        <div className='font-semibold text-gray-800 flex items-center gap-[8px]'>
            <span>$20</span>
            <span className='line-through text-sm'>$25</span>
        </div>
        </div>
        <div className='font-semibold text-green-500'>20% off</div>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
