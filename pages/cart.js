import CartItem from '@/components/CartItem'
import Summary from '@/components/Summary'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const cart = () => {
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
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    
                </div>
                {/* Items Added End */}

                {/* Summary Start */}
                <div className='flex-[1] '>
                    <div className='text-xl font-bold'>Summary</div>
                    <Summary/>
                    <button className='bg-black mt-3 text-lg transition-transform active:scale-95 hover:bg-black/[0.7]   text-white py-3 w-full rounded-full'>Checkout</button>
                </div>
                {/* Summary End */}

            
        </div>
        {/* Cart Content Start */}

        </Wrapper>
        
      
    </div>
  )
}

export default cart
