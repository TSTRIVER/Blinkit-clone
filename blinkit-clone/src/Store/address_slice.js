import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const addressSlice = createSlice({
    name: "address",
    initialState: {addresses: [],curr_address:{}},
    reducers: {
        get_addresses: (state,action) => {
            return{
                ...state,
                addresses: action.payload
            }
        },
        get_selected_address: (state,action) => {
            return{
                ...state,
                curr_address: action.payload
            }
        }
    }
})

export const getYourAddress = (userid,setas,receiver,flat,street) => async(dispatch) => {
      try{
          await axios.post(`/api/v1/createAddress`,{userid,setas,receiver,flat,street});
      }
      catch(error){
         console.log(error);
      }
}

export const getAddresses = (userid) => async(dispatch) => {
    try{
       const {data} = await axios.get(`/api/v1/getAddresses/${userid}`);
       dispatch(get_addresses(data.addresses));
    }
    catch(error){
        console.log(error);
    }
}

export const updateAddress = (selected_ind,userid,setas,receiver,flat,street) => async(dispatch) => {
     try{
        await axios.put(`/api/v1/updateAddress/${userid}`,{selected_ind,setas,receiver,flat,street});
     }
     catch(error){
         console.log(error);
     }
}

export const {get_addresses,get_selected_address} = addressSlice.actions;
export default addressSlice.reducer;