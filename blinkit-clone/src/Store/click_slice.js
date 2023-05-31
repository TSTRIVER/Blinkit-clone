import { createSlice } from "@reduxjs/toolkit";

const click_slice = createSlice({
    name : 'clicker',
    initialState: {clicker: {first:0,second:0,name: ""}},
    reducers : {
        updateRow:(state,action)=>{
            const data = {
                   first: action.payload.first,
               }
            state.clicker.first = data.first;
        },
        updateCol:(state,action)=>{
            const data = {
                   second: action.payload.second,
               }
            state.clicker.second = data.second;
        },
        updateName:(state,action)=>{
            const data = {
                   name: action.payload.name,
               }
            state.clicker.name = data.name;
        },
   }
})

export const {updateRow,updateCol,updateName} = click_slice.actions;
export default click_slice.reducer;