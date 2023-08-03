import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "a", doc_count: 11 },
    { id: 2, name: "b", doc_count: 8 },
    { id: 3, name: "c", doc_count: 64 },
    { id: 4, name: "d", doc_count: 107 },
];

const Menu = ({showCatMenu,setShowCatMenu,categories}) => {
    
  return (
    <ul className='text-black sm:min-w-[250px]  z-[99] flex gap-7 font-semibold'>
        {data.map((item)=>{
            return(
            <React.Fragment key={item.id}>
                {!!item?.subMenu? (<li  onMouseLeave={()=>setShowCatMenu(false)} onMouseEnter={()=>setShowCatMenu(true)} className='flex relative items-center gap-2 cursor-pointer'>
                    {item.name}
                    <BsChevronDown size={14}/>
                    {showCatMenu&&
                       (<ul className="bg-white absolute top-6 left-0 min-w-[250px] block px-1 py-1 text-black shadow-lg">
                        {categories?.map(({attributes:submenu,id})=>{
                            return(<Link key={id} onClick={()=>setShowCatMenu(false)} href={`/category/${submenu.slug}`}><li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {submenu?.name}
                            <span className="opacity-50 text-sm">
                                {`(${submenu?.products.data.length})`}
                            </span>
                        </li></Link>)
                        })}
                        </ul>)}

                    </li>):(<><Link href={item.url}><li>{item.name}</li></Link>
                    
                    </>
                    )
                }

            </React.Fragment>
            )
            
        })}


    </ul>
  )
}

export default Menu
