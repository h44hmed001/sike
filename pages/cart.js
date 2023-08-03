import CartItem from '@/components/CartItem'
import Summary from '@/components/Summary'
import Wrapper from '@/components/Wrapper'
import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '@/utils/api'
import Link from 'next/link'

const cart = () => {
  const [loading,setLoading]=useState(false)
  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);
  const {cartItems} = useSelector(state => state.cart)
  const totalMoney=useMemo(()=>{
    return cartItems.reduce((total,val)=>
  total+val.attributes.price,0
)
  },[cartItems])
  console.log(cartItems)
  const handlePayment = async () => {
    try {
      await setLoading(true)
        const stripe = await stripePromise;
        const res = await makePaymentRequest("/api/orders", {
            products: cartItems,
        });
        await stripe.redirectToCheckout({
            sessionId: res.stripeSession.id,
        });
    } catch (error) {
       setLoading(false)
        console.log(error);
    }
};
  return (
    <div className='md:py-20'>
        <Wrapper>
            
        <div className='heading font-semibold mt-8 mb-5 leading-tight  text-[40px]'>Cart</div>
        {/* Heading End */}
        {/* Cart Content Start */}
        <div className='flex gap-20 flex-col lg:flex-row py-10'>
            {/* Cart Headings */}
            
                {/* Items Added Start */}
                <div className='flex-[2]'>
                    <div className='text-xl font-bold'>Items Added</div>
                    {cartItems.length>0?cartItems.map((cartItem)=>(<CartItem key={cartItem.id } data={cartItem} />)):<div className='flex items-center font-semibold text-xl justify-center h-full'><div>Nothing in Cart</div></div>}
                    <Link className='items-center flex justify-center' href="/" >
                      <button className='bg-black mt-3 text-lg transition-transform active:scale-95 hover:bg-black/[0.7]    text-white py-5 w-3/5 rounded-full'> Continue Shopping</button>
                        
                    </Link>
                </div>
                {/* Items Added End */}

                {/* Summary Start */}
                <div className='flex-[1] '>
                    <div className='text-xl font-bold'>Summary</div>
                    <Summary totalMoney={totalMoney} />
                    <button onClick={handlePayment} className='bg-black mt-3 text-lg transition-transform active:scale-95 hover:bg-black/[0.7]   text-white py-3 w-full rounded-full flex justify-center gap-3 items-center'>Checkout {loading&&<Image src="/spinner.svg" />} </button>
                </div>
                {/* Summary End */}

            
        </div>
        {/* Cart Content Start */}

        </Wrapper>
        
      
    </div>
  )
}

export default cart
