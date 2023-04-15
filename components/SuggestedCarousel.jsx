import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const SuggestedCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        },
      };
  return (
    <div className='mt-[50px]  md:mt-[100px] mb-[100px] md:mb-[8px]'>
        <div className='text-3xl mb-5 font-semibold '>You Might Also Like</div>
        <Carousel itemClass='px-[10px] ' responsive={responsive} >
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
        </Carousel>
    
      
    </div>
  )
}

export default SuggestedCarousel
