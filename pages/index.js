import HomeBanners from "@/components/HomeBanners";
import ProductGallery from "@/components/ProductGallery";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";



export default function Home({products}) {

  
  return (
    <div>
      <HomeBanners subtitle="Showcase your whole family's look with the Air Max 97 SE and other iconic styles." heading="Style On Blast" CompUrl={"https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1487,c_limit/d83ef844-3099-477e-863e-470b73d4b84a/nike-just-do-it.jpg"} MobileUrl={"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_584,c_limit/76b095fe-780f-4ce6-ad88-050d83dcd055/nike-just-do-it.jpg"}/>
      <Wrapper className="flex flex-col ">
      <div className='grid grid-cols-1 gap-[50px] md:grid-cols-3 lg:grid-cols-3 px-8 my-12'>
        {products?.data?.slice(0,5).map((item)=><ProductCard name={item.attributes.name} discountedPrice={item.attributes.price} thumbnail={item.attributes.thumbnail.data.attributes.url} originalPrice={item.attributes.original_price} slug={item.attributes.slug}   />)
        }
        
        </div>
        </Wrapper>
      

    </div>
  )
}

export async function getStaticProps(){
  const products=await fetchDataFromApi("/api/products?populate=*")
  return {props:{
    products,
  }}
}