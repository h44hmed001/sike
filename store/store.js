import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import favouriteReducer from "./favouriteSlice"
export default configureStore({
  reducer: {
    cart:cartReducer,
    favourite:favouriteReducer,
}
})