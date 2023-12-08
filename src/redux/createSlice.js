import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: [
       
    ],
    reducers: {
        increment: (state, action) => {
            
            console.log(action.payload,"load");
            state.push(action.payload)
           
        },
    },
})

export const { increment } = counterSlice.actions
export default counterSlice