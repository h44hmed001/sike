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
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuMobile from './MenuMobile';
import Image from 'next/image';
const Navbar = () => {
  const [categories,setCategories]=useState(null)
    const [showCatMenu,setShowCatMenu]=useState(false)
    const [mobMenu,setMobMenu]=useState(false)
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
    <div className='h-[40px] md:h-[60px]  flex  top-0'>
        <Wrapper className=" flex items-center justify-between">
            <Link onClick={()=>setMobMenu(false)} href="/"><Image width={60} height={30} src='/logo.svg'/></Link>
            <Menu setMobMenu={setMobMenu} mobMenu={mobMenu} showCatMenu={showCatMenu} categories={categories} setShowCatMenu={setShowCatMenu} />
            <div className='flex  items-center gap-3'>

            <Link onClick={()=>setMobMenu(false)} href="/favourites"><IconButton style={{"color":"black"}}><Badge badgeContent={itemsInFavourites}  color="error"><FavoriteBorderOutlinedIcon/></Badge></IconButton></Link>
            <Link onClick={()=>setMobMenu(false)} href="/cart"><IconButton style={{"color":"black"}}><Badge badgeContent={itemsInCart} color="error"><ShoppingCartOutlinedIcon/></Badge></IconButton></Link>
            <div  onClick={()=>setMobMenu((prev)=>!prev)} className='text-black flex lg:hidden cursor-pointer'><MenuOutlinedIcon/></div>
            </div>
            {mobMenu&&<MenuMobile showCatMenu={showCatMenu}
    setShowCatMenu={setShowCatMenu}
    setMobileMenu={setMobMenu}
    categories={categories}/>}

        </Wrapper>

    </div>
  )
}

export default Navbar
