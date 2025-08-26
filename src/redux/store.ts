import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { Storage } from 'redux-persist';
import rootReducer from './rootReducer';

export const store = configureStore({
	reducer: rootReducer
})


// добавить persist