import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material'
const CartItem = () => {
  return (
    <div className='border-b gap-3 md:gap-5 flex py-5'>

        <img className='aspect-square object-contain md:w-[170px] w-[125px]' src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/0a60213f-d4e7-421c-865f-bb8d51cdeefc/zion-2-x-naruto-mens-basketball-shoes-b3RVXd.png"/>
    
    {/* Text Block */}
    <div className='w-full'>
        <div className='flex justify-between'>
        <div className='text-xl font-semibold'>Product Name</div>
        <div className='text-xl text-gray-500 hidden md:block font-semibold'>Price</div>
        </div>
        <div className='text-xl text-gray-500'>Shoe Type</div>
        <div className='text-xl text-gray-700 md:hidden font-semibold'>Price</div>
        {/* Size Quantity Start */}
        <div className=' md:flex items-center justify-between'>
            {/* Size Row Start */}
            <div className='md:flex mt-3 gap-3'>
            <div className='flex items-center gap-2 text-gray-500 font-semibold text-lg'>
                <div>Size</div>
                <select>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                    <option value="1">UK 6</option>
                </select>
            </div>
            {/* Size Row End */}
            {/* Quantity Row Start */}
            <div className='flex items-center gap-2 text-gray-500 font-semibold text-lg'>
                <div>Quanity</div>
                <select>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                    <option value="1">8</option>
                </select>
            </div>
            </div>
            {/* Quantity Row End */}
            <div className="text-gray-500"><IconButton><DeleteOutlineOutlinedIcon/></IconButton></div>
            
        </div>
        {/* Size Quantity End */}
        
    </div>
        
      
    </div>
  )
}

export default CartItem
