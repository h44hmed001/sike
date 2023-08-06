import React from 'react'
import { Carousel } from 'react-responsive-carousel';
 import "react-responsive-carousel/lib/styles/carousel.min.css";
const ProductCarousel = ({images}) => {
  console.log(images)
  return (
    <div className='max-w-[1360px]  w-full mx-auto top-[50px]'>
        <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} thumbWidth={60} className='productCarousel'>
          {images.map((item)=>(
            <img src={item.attributes.url}/>
          ))}
            
           
          
                
            </Carousel>
      
    </div>
  )
}

export default ProductCarousel
