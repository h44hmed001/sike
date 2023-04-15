import React from 'react'
import Wrapper from './Wrapper'

const HomeBanners = ({mainHeading,heading,subtitle,MobileUrl,CompUrl}) => {
  return (
    <div className='homeBanners text-black'>
        <Wrapper>
          {mainHeading&&<span className='font-oswald font-extrabold text-2xl'>{mainHeading}</span>}
        <div className='posterBlock'>
      {CompUrl&&<img className='hidden object-cover md:flex' src={CompUrl}/>}
      {MobileUrl&&<img  className={`flex md:hidden  items-center `} src={MobileUrl}/>}
      </div>
      <div className='textBlock flex flex-col items-center justify-center h-[230px]'>
        
        <div className='font-oswald text-[30px] md:text-[60px] flex flexx-wrap mb-9 font-extrabold'>{heading}</div>
        <div className='font-bold'>{subtitle}</div>
        
      </div>
      </Wrapper>
    </div>
  )
}

export default HomeBanners
