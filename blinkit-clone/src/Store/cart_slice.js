import { createSlice } from "@reduxjs/toolkit";

const cart_slice = createSlice({
    name: "cart",
    initialState: {time:0,items:0,totals:0},
    reducers: {
       get_time: (state,action) => {
          return{
            ...state,
             time:action.payload
          }
       },
       get_items: (state,action) => {
          return{
            ...state,
            items:action.payload
          }
       },
       get_total: (state,action) => {
          return{
            ...state,
            totals: action.payload
          }
       }
    }
})


export const {get_time,get_items,get_total} = cart_slice.actions;
export default cart_slice.reducer;