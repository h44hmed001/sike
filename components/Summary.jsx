import React from 'react'

const Summary = () => {
  return (
    <div className='bg-black/[0.2] font-semibold rounded-2xl mt-5 p-5'>
        <div className='flex text-xl mb-7 font-semibold justify-between'>
        <div >Subtotal</div>
        <div>Price</div>
        </div>
        
      The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.
     
    </div>
  )
}

export default Summary
