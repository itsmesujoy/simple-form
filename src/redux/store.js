import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './createSlice'

const store = configureStore({
    reducer: counterSlice.reducer,
})
export default store;