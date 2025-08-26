import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	cart: "" // добавить cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;