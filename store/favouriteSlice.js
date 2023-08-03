import { createSlice } from '@reduxjs/toolkit'

export const favouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites:[]
  },
  reducers: {

    addToFavourites: (state, action) => {
        const item=state.favourites.find((p)=>p.id===action.payload.id)
        if (item){
          item.quantity++
          item.attributes.price=item.quantity*item.quantityPrice
        }
        else{
          state.favourites.push({...action.payload,quantity:1})
        }
        
      },
      removeFromFavourites:(state,action)=>{
        state.favourites=state.favourites.filter((item)=> {
          return item.id!==action.payload.id
        }
        )
      }
      
    
  }
})

// Action creators are generated for each case reducer function
export const { addToFavourites,removeFromFavourites} = favouriteSlice.actions

export default favouriteSlice.reducer