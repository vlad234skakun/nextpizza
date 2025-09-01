import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
	items: []
}

// сделать интерфейс. Что мы будем получать

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => { 
			state.items.push(action.payload)
		}
	}
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer;