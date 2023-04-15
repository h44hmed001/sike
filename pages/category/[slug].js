import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const Category = () => {
  return (
    <div>
        <Wrapper className="flex flex-col ">
        <div className='heading font-semibold mt-8 mb-5 leading-tight  text-[40px]'>Category Name <span className='text-gray-600 text-xl'>(200)</span> </div>
        <div className='grid grid-cols-1 gap-[80px] md:grid-cols-3 lg:grid-cols-3 px-8 my-12'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
        </Wrapper>
    </div>
  )
}

export default Category
