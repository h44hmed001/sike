"use client"
import Wrapper from '@/components/Wrapper'
import React, { useState } from 'react'


const contact = () => {
    const [contact,setContact]=useState({
        email:"",
        name:"",
        text:""
    })
    console.log(contact)
  return (
    <div>
      <Wrapper>
      <div className='heading font-semibold mt-8 mb-5 leading-tight  text-[40px]'>Contact Page</div>
      <div className='flex mb-10 flex-col gap-10'>
      <input value={contact.email} onChange={(e)=>setContact({...contact,email:e.target.value})} className='p-4' type="email" placeholder='Enter your email'  />
      <input value={contact.name} onChange={(e)=>setContact({...contact,name:e.target.value})} className='p-4'  type="text" placeholder='Enter your name' />
      <textarea value={contact.text} onChange={(e)=>setContact({...contact,text:e.target.value})} className='p-4 pb-20'  placeholder='Enter your text' type="text" />
      <button onClick={()=>setContact( {email:"",
        name:"",
        text:""})} className='bg-black mt-3 text-lg transition-transform active:scale-95 hover:bg-black/[0.7]   text-white py-3 w-full rounded-full flex justify-center gap-3 items-center'>Send </button>
      </div>
      </Wrapper>
    </div>
  )
}

export default contact
