import React, { useState } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Menu from './Menu'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
const Navbar = () => {
    const [showCatMenu,setShowCatMenu]=useState(false)
  return (
    <div className='h-[40px] md:h-[60px] flex  top-0'>
        <Wrapper className=" flex items-center justify-between">
            <Link href="/"><img className='w-[40px] md:w-[60px]' src='/logo.svg'/></Link>
            <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
            <div className='flex gap-3'>
            
            <IconButton style={{"color":"black"}}><Badge badgeContent={4}  color="error"><FavoriteBorderOutlinedIcon/></Badge></IconButton>
            
            
            <Link href="/cart"><IconButton style={{"color":"black"}}><Badge badgeContent={4} color="error"><ShoppingCartOutlinedIcon/></Badge></IconButton></Link>
            
            </div>
        </Wrapper>

    </div>
  )
}

export default Navbar
