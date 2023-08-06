import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '@/utils/api'
import React, { useEffect, useState } from 'react'

const Category = ({category,products,slug}) => {
  const [data, setData] = useState(products?.data); 
  useEffect(()=>
  {
    setData(products?.data)
  },[category])
  
  
  const handleFiltering = (e) => {
    const sortBy = e.target.value;
    const sortedData = [...data]; // Create a copy of the data array to avoid mutating the original array
    if (sortBy === 'lowToHigh') {
      sortedData.sort((a, b) => a.attributes.price - b.attributes.price);

    } else if (sortBy === 'highToLow') {
      sortedData.sort((a, b) => b.attributes.price - a.attributes.price);
      
    }
    setData(sortedData);

  };
  console.log(data)
 
  return (
    <div>
        <Wrapper className="flex flex-col ">
        <div className='flex justify-between items-center mt-8 mb-5'>
        <div className='heading font-semibold  leading-tight  text-[40px]'>{category.data[0].attributes.name}<span className='text-gray-600 text-xl'> ({`${data?.length}`})</span> </div>
        
        <select onChange={(e)=>handleFiltering(e)} id='filters' className='text-black bg-transparent'>
          <option selected="selected" className='hidden' disabled={true} value="#">Filters</option>
          <option value="lowToHigh">Price(Low To High)</option>
          <option value="highToLow">Price(High To Low)</option>
        </select>
        </div>
        <div className='grid grid-cols-1 gap-[80px] md:grid-cols-3 lg:grid-cols-3 px-8 my-12'>
        {data?.map((item)=><ProductCard data={item} />)
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
