import { removeFromFavourites } from '@/store/favouriteSlice'
import { getDiscountPercentage } from '@/utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'

const ProductCard = ({data,fav}) => {
  const dispatch=useDispatch()
  
  return fav?(
    
    <div className='productCard w-[375px]'>
      <Link href={`/products/${data?.attributes.slug}`}>
      <Image width={500} height={500} className='w-full shadow-xl transition-transform hover:scale-105 rounded-[50px] h-ful object-contain' src={data?.attributes?.thumbnail?.data.attributes.url} />
      </Link>
      <div className='textBlock px-4 pt-3 flex justify-between items-center'>
        <div className='prices '>
          <div onClick={(e)=>{dispatch(removeFromFavourites(data)),e.stopPropagation()}} className={`flex cursor-pointer flex-col `}>
            <div className='font-bold text-xl '>{data.attributes?.name}</div>
            <div className='max-w-fit mt-2 px-3 rounded-md bg-red-500'>Remove</div>
            </div>
        <div className='font-semibold text-gray-800 flex items-center gap-[8px]'>
            
        </div>
        </div>
        
      </div>
    </div>
   
  )  : (
    <Link href={`/products/${data?.attributes.slug}`}>
    <div className='productCard w-[375px]'>
      <Image className='min-w-full shadow-xl transition-transform hover:scale-105 rounded-[50px] min-h-full object-cover' width={500} height={500} src={data?.attributes.thumbnail.data.attributes.url}/>
      <div className='textBlock px-4 pt-3 flex justify-between items-center'>
        <div className='prices '>
            <div className='font-bold text-xl '>{data?.attributes.name}</div>
        <div className='font-semibold text-gray-800 flex items-center gap-[8px]'>
            {data?.attributes.price&&<span>Rs. {data?.attributes.price}</span>}
            <span className='line-through text-sm'>Rs. {data?.attributes.original_price}</span>
        </div>
        </div>
        {data?.attributes.price&&<div className='font-semibold text-green-500'>{parseInt(getDiscountPercentage(data?.attributes.price,data.attributes.original_price)) }% off</div>}
      </div>
    </div>
    </Link>
  )
}

export default ProductCard
