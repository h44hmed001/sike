import ProductCarousel from '@/components/ProductCarousel'
import Wrapper from '@/components/Wrapper'
import React, { useEffect, useMemo, useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SuggestedCarousel from '@/components/SuggestedCarousel';
import { fetchDataFromApi } from '@/utils/api';
import { getDiscountPercentage } from '@/utils/helpers';
import ReactMarkdown from "react-markdown"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '@/store/cartSlice';
import { addToFavourites, removeFromFavourites } from '@/store/favouriteSlice';


const ProductDetails = ({product,relatedProducts}) => {
  const [selectedSize,setSelectedSize]=useState()
  const [error,setError]=useState(false)
  const dispatch = useDispatch()
  const {favourites}=useSelector(state=>state.favourite)
  const [removeId,setRemoveId]=useState()
  const addedInFavourites=useMemo(()=>{

    favourites.map((favourite)=>{if(favourite.id===product.data[0].id ){setRemoveId(product.data[0].id) }})
  },[favourites])
  return (
    <div className='w-full md:py-20'>
    
      <Wrapper>
        {/* Left Start */}
        <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-[100px]'>
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
          <ProductCarousel images={product.data[0].attributes.image.data}/>
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div className='flex-[1] py-3'>
          <div className='font-bold leading-[40px] mb-4 text-[37px]'>{product?.data[0]?.attributes?.name}</div>
          <div className='font-semibold mb-6 text-[18px]'>{product?.data[0]?.attributes?.subtitle}</div>
          <div className='flex justify-between'>
          <div className='flex items-center mb-3 gap-2'>
          <div className='font-semibold text-[17px]'>MRP: Rs. {product?.data[0]?.attributes?.price}</div>
          <span className='line-through text-sm'>Rs. {product.data[0].attributes.original_price}</span>
          </div>
          
          
          <div className='font-semibold text-green-500'>{getDiscountPercentage(product.data[0].attributes.price,product.data[0].attributes.original_price)}% off</div>
          </div>
          {/* Size Sec Start */}
          <div>
            {/* Headings Start */}
          <div className='flex font-semibold text-lg mb-3 justify-between'>
            <div className='text-black'>Select Size</div>
            <div className='text-gray-500'>Size Guide</div>
          </div>
          {/* Headings End */}
          {/* Sizes Start */}
          <div id="sizesGrid" className='grid gap-3 grid-cols-3'>
            {product?.data[0]?.attributes?.size?.data.map(({size,enabled})=>(enabled==true?<div onClick={()=>{setSelectedSize(size) ,setError(false)}} className={`border py-3 cursor-pointer text-center rounded-lg text-lg hover:border-black font-semibold ${selectedSize==size?"border-black":""}`} >{size}</div>:<div className='border py-3 text-center cursor-not-allowed rounded-lg text-lg bg-black/[0.1] opacity-50 font-semibold'>{size}</div>))
            }
            
            
          </div>
          {error&&<div className='text-red-600 font-semibold mt-1'>Please select a size</div>}
          {/* Sizes End */}
          </div>
          {/* Size Sec End */}
          <button onClick={()=>{
            if(!selectedSize){
              setError(true)
              document.getElementById("sizesGrid").scrollIntoView({ behavior: "smooth", block: "center" })
            }
            else{
              dispatch(addToCart(

              {...product?.data[0],selectedSize,quantityPrice:product?.data[0]?.attributes?.price}

              ))
            }
          }
          
            
            
            } className='bg-black mt-3 text-lg transition-transform active:scale-95 hover:bg-black/[0.7]   text-white py-5 w-full rounded-full'>Add to Cart</button>
          {removeId===product.data[0].id?<button className='mt-3 flex justify-center transition-transform active:scale-95 items-center text-lg border hover:border-black   text-black py-5 w-full rounded-full'>Added<FavoriteBorderOutlinedIcon/></button>:<button onClick={()=>dispatch(addToFavourites({...product?.data[0]}))} className='mt-3 flex justify-center transition-transform active:scale-95 items-center text-lg border hover:border-black   text-black py-5 w-full rounded-full'>Favourite<FavoriteBorderOutlinedIcon/></button>}
          {/* Product Details Start */}
          <div className='pt-7  '>
            <div className='font-bold text-lg'>Product Details</div>
            <p className='text-md break-all py-5'><ReactMarkdown>{product?.data[0]?.attributes?.description}</ReactMarkdown></p>
          </div>
        </div>
        {/* Right End */}
        </div>
        <SuggestedCarousel relatedProducts={relatedProducts}/>
      </Wrapper>      
    </div>
  )
}

export default ProductDetails

export async function getStaticPaths () {
  const products=await fetchDataFromApi("/api/products?populate=*")
  const paths=products?.data.map((p)=>({
    params:{
      slug:p.attributes.slug
    }
  }))
  return{
    paths,
    fallback:false
  }
  
}
 
export async function getStaticProps ({params:{slug}}){
  const relatedProducts=await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$ne]=${slug}`)
  const product=await fetchDataFromApi(`/api/products?populate=*&[filters][slug][$eq]=${slug}`)
  return{
    props:{
      
    product,
    slug,
    relatedProducts,
    }
    
  }
}