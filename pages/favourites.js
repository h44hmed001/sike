
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { useSelector } from 'react-redux'

const favourites = () => {
    const {favourites} = useSelector(state => state.favourite)
    
  return (
    <div>
      <div className='md:py-20'>
        <Wrapper>
            
        <div className='heading font-semibold mt-8 mb-5 leading-tight  text-[40px]'>Favourites</div>
        {/* Heading End */}
        {/* Cart Content Start */}
        <div className='flex gap-20 flex-col lg:flex-row py-10'>
            {/* Cart Headings */}
            
                {/* Items Added Start */}
                <div className='flex-[2]'>
                    <div className='text-xl font-bold mb-10'>Items Added</div>

                    
                    <div className='grid grid-cols-1 gap-[50px] md:grid-cols-3 lg:grid-cols-3 px-8 my-12'>
                    {favourites.length>0?favourites.map((favourite)=>(<ProductCard key={favourite.id} name={favourite.attributes.name} originalPrice={favourite.attributes.original_price} thumbnail={favourite.attributes.thumbnail.data.attributes.url} slug={favourite.attributes.slug} discountedPrice={favourite.attributes.price} />)):<div className='flex items-center  flex-1 font-semibold text-xl justify-center h-full'><div className='w-full'>Nothing in Favourites</div></div>}
                    </div>
                </div>
                {/* Items Added End */}
        </div>
        {/* Cart Content Start */}

        </Wrapper>
        
      
    </div>
    </div>
  )
}

export default favourites
