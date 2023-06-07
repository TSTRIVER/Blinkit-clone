import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const orders_slice = createSlice({
     name: 'orders',
     initialState:{orders:[]},
     reducers:{
        get_your_orders:(state,action) => {
            return{
                ...state,
                orders:action.payload
            }
        },
     }
})

export const fetchOrders = (userid) => async(dispatch) => {
    try{
      const {data} = await axios.get(`/api/v1/fetchOrders/${userid}`);
      dispatch(get_your_orders(data.orders_arr));
    }
    catch(err){
        console.log(err);
    }
}

export const updateStatus = (user_id,order_id,status) => async(dispatch) => {
     try{
        await axios.put(`/api/v1/updateStatus`,{user_id,order_id,status});
     }
     catch(err){
        console.log(err);
     }
}

export const {get_your_orders} = orders_slice.actions;
export default orders_slice.reducer;