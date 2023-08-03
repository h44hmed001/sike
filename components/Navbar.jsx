import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Menu from './Menu'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { fetchDataFromApi } from '@/utils/api';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [categories,setCategories]=useState(null)
    const [showCatMenu,setShowCatMenu]=useState(false)
    useEffect(()=>{
      fetcher()
    },[])
    const fetcher=async()=>{
      const {data}=await fetchDataFromApi("/api/categories?populate=*")
      setCategories(data)
    }
    const itemsInCart = useSelector(state => state.cart. cartItems.length)
    const itemsInFavourites = useSelector(state => state.favourite. favourites.length)
  return (
    <div className='h-[40px] md:h-[60px] flex  top-0'>
        <Wrapper className=" flex items-center justify-between">
            <Link href="/"><img className='w-[40px] md:w-[60px]' src='/logo.svg'/></Link>
            <Menu showCatMenu={showCatMenu} categories={categories} setShowCatMenu={setShowCatMenu} />
            <div className='flex gap-3'>
            
            <Link href="/favourites"><IconButton style={{"color":"black"}}><Badge badgeContent={itemsInFavourites}  color="error"><FavoriteBorderOutlinedIcon/></Badge></IconButton></Link>
            
            
            <Link href="/cart"><IconButton style={{"color":"black"}}><Badge badgeContent={itemsInCart} color="error"><ShoppingCartOutlinedIcon/></Badge></IconButton></Link>
            
            </div>
        </Wrapper>

    </div>
  )
}

export default Navbar
