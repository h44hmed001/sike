import Link from 'next/link'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Carousel = ({heading,Image}) => {
  return (
    <div className='carousel mb-[70px]'>
        
        <div className='max-w-[1500px] justify-center items-center p-4 mx-auto'>
        <h2 className='mb-[20px] font-oswald font-extrabold text-2xl'>{heading}</h2>
            <div className='flex overflow-y-scroll gap-4'>
            {Image.map((item)=>{
                return(<>
                <Link className='transform duration-200  cursor-pointer hover:scale-105' href="/products/1"><img className='rounded-[40px]'  src={item.image}/></Link>
              </>)
            })}
            </div>

        </div>
      
    </div>
  )
}

export default Carousel
