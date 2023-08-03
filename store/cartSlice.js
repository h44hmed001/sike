import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems:[],

  },
  reducers: {

    addToCart: (state, action) => {
        const item=state.cartItems.find((p)=>p.id===action.payload.id)
        if (item){
          item.quantity++
          item.attributes.price=item.quantity*item.quantityPrice
        }
        else{
          state.cartItems.push({...action.payload,quantity:1})
        }
        
      },
      updateCart: (state, action) => {
        state.cartItems=state.cartItems.map((item)=>{
          if(item.id===action.payload.id){
            return{
              ...item,[action.payload.key]:action.payload.val
            }
          }return item
        }
          
        )
      },
      removeFromCart:(state,action)=>{
        state.cartItems=state.cartItems.filter((item)=> {
          return item.id!==action.payload.id
        }
        )
      }
      
    
  }
})

// Action creators are generated for each case reducer function
export const { addToCart,updateCart,removeFromCart } = cartSlice.actions

export default cartSlice.reducer