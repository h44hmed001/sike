import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

const HomeBanners = ({mainHeading,heading,subtitle}) => {
  return (
    <div className='homeBanners text-black'>
        <Wrapper>
          {mainHeading&&<span className='font-oswald font-extrabold text-2xl'>{mainHeading}</span>}
        
      <div className='textBlock flex flex-col items-center justify-center h-[230px]'>
        
        <div className='font-oswald text-[30px] md:text-[60px] flex flex-wrap mb-9 font-extrabold'>{heading}</div>
        <div className='font-bold'>{subtitle}</div>
        
      </div>
      </Wrapper>
    </div>
  )
}

export default HomeBanners
