import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '@/utils/api'
import React from 'react'

const Category = ({category,products,slug}) => {
 
  return (
    <div>
        <Wrapper className="flex flex-col ">
        <div className='heading font-semibold mt-8 mb-5 leading-tight  text-[40px]'>{category.data[0].attributes.name} <span className='text-gray-600 text-xl'>({`${products.data.length}`})</span> </div>
        <div className='grid grid-cols-1 gap-[80px] md:grid-cols-3 lg:grid-cols-3 px-8 my-12'>
        {products?.data?.map((item)=><ProductCard name={item.attributes.name} discountedPrice={item.attributes.price} thumbnail={item.attributes.thumbnail.data.attributes.url} originalPrice={item.attributes.original_price} slug={item.attributes.slug}   />)
        }
            {/* <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/> */}

        </div>
        </Wrapper>
    </div>
  )
}

export default Category

export async function getStaticPaths () {
  const categories=await fetchDataFromApi("/api/categories?populate=*")
  const paths=categories?.data.map((category)=>({
    params:{
      slug:category.attributes.slug
    }
  }))
  return{
    paths,
    fallback:false
  }
  
}
 
export async function getStaticProps ({params:{slug}}){
  const category=await fetchDataFromApi(`/api/categories?filters[slug][$eq}=${slug}`)
  const products=await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`)
  return{
    props:{
      category,
    products,
    slug
    }
    
  }
}
