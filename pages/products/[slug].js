import ProductCarousel from '@/components/ProductCarousel'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SuggestedCarousel from '@/components/SuggestedCarousel';


const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        {/* Left Start */}
        <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]'>
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
          <ProductCarousel/>
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div className='flex-[1] py-3'>
          <div className='font-bold mb-4 text-[37px]'>Product Name</div>
          <div className='font-semibold mb-6 text-[18px]'>Category/Subtitle</div>
          <div className='font-semibold mb-3 text-[17px]'>MRP: Rs.Price</div>
          {/* Size Sec Start */}
          <div>
            {/* Headings Start */}
          <div className='flex font-semibold text-lg mb-3 justify-between'>
            <div className='text-black'>Select Size</div>
            <div className='text-gray-500'>Size Guide</div>
          </div>
          {/* Headings End */}
          {/* Sizes Start */}
          <div className='grid gap-3 grid-cols-3'>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold' >Sizes</div>
            <div className='border py-3 text-center cursor-not-allowed rounded-lg text-lg bg-black/[0.1] opacity-50 font-semibold' >Sizes</div>
          </div>
          <div className='text-red-600 font-semibold mt-1'>Please select a size</div>
          {/* Sizes End */}
          </div>
          {/* Size Sec End */}
          <button className='bg-black mt-3 text-lg transition-transform active:scale-95 hover:bg-black/[0.7]   text-white py-5 w-full rounded-full'>Add to Cart</button>
          <button className='mt-3 flex justify-center transition-transform active:scale-95 items-center text-lg border hover:border-black   text-black py-5 w-full rounded-full'>Favourite<FavoriteBorderOutlinedIcon/></button>
          {/* Product Details Start */}
          <div className='pt-7  '>
            <div className='font-bold text-lg'>Product Details</div>
            <p className='text-md break-all py-5'>BlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlah</p>
          </div>

        </div>
        {/* Right End */}
        </div>
        <SuggestedCarousel/>
      </Wrapper>      
    </div>
  )
}

export default ProductDetails
