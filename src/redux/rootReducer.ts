import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from "./slices/cartSlice"


const rootReducer = combineReducers({
	cart: cartReducer // добавить cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;