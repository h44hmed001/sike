import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { updateCart,removeFromCart } from '@/store/cartSlice';
const CartItem = ({data}) => {
    const dispatch=useDispatch()
    const product=data.attributes
    const updateCartItem=(e,key)=>{
        let payload={
            val:e.target.value,
            key,
            id:data.id
        }
        dispatch(updateCart(payload))
        
    }
    

  return (
    <div className='border-b gap-3 md:gap-5 flex py-5'>
        <Image className='aspect-square rounded-sm object-contain md:w-[170px] w-[125px]' width={150} height={105} src={product.thumbnail.data.attributes.url}/>
    
    {/* Text Block */}
    <div className='w-full'>
        <div className='flex justify-between'>
        <div className='text-xl font-semibold'>{product.name}</div>
        <div className='text-xl text-gray-500 hidden md:block font-semibold'>Rs. {product.price}</div>
        </div>
        <div className='text-xl text-gray-500'>{product.subtitle}</div>
        <div className='text-xl text-gray-700 md:hidden font-semibold'>Rs. {product.price}</div>
        {/* Size Quantity Start */}
        <div className=' md:flex items-center justify-between'>
            {/* Size Row Start */}
            <div className='md:flex mt-3 gap-3'>
            <div className='flex items-center gap-2 text-gray-500 font-semibold text-lg'>
                <div>Size</div>
                <select onChange={(e)=>updateCartItem(e,"selectedSize")}>
                    {product.size.data.map((size,i)=>(size.enabled&&<option
                    selected={data.selectedSize==size.size} value={size.size}>{size.size}</option>))}
                </select>
            </div>
            {/* Size Row End */}
            {/* Quantity Row Start */}
            <div className='flex items-center gap-2 text-gray-500 font-semibold text-lg'>
                <div>Quanity: </div>
            
                    {data.quantity}
                
            </div>
            </div>
            {/* Quantity Row End */}
            <div onClick={()=>dispatch(removeFromCart(data))} className="text-gray-500"><IconButton><DeleteOutlineOutlinedIcon/></IconButton></div>
            
        </div>
        {/* Size Quantity End */}
        
    </div>
        
      
    </div>
  )
}

export default CartItem
