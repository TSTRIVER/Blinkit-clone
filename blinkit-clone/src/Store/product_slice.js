import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const product_slice = createSlice({
    name: "product",
    initialState: {product:{},success:false,products:[]},
    reducers: {
        create_product_success:(state,action) => {
             return{
                ...state,
                success:true,
                product: action.payload
             };
        },
        get_product_success: (state,action) => {
             return{
                ...state,
                success:true,
                products: action.payload
             }
        },
        focus_product: (state,action) => {
             return{
                ...state,
                  product: action.payload
             }
        },
        update_product_success: (state,action) => {
           return{
              ...state,
               success: true,
               product: action.payload
           }
        },
        delete_product_success: (state) => {
           return{
            ...state,
               success:true,
           }
        }
    }
});

export const createProduct = (name,price,quantity,image) => async(dispatch) => {
    try{
      const {data} = await axios.post(`/api/v1/createProduct`,{name,price,quantity,image});
      dispatch(create_product_success(data.new_product));
    }
    catch(error){
        console.log(error);
    }
}

export const getProducts = () => async(dispatch) => {
     try{
        const {data} = await axios.get(`/api/v1/products`);
        dispatch(get_product_success(data.prod_arr));
     }
     catch(error){
        console.log(error);
     }
}

export const updateProduct = (id,name,price,quantity,image) => async(dispatch) => {
    try{
     const {data} = await axios.put(`/api/v1/updateprod/${id}`,{name,price,quantity,image});
      dispatch(update_product_success(data.updatedProd));
    }
    catch(error){

    }
}

export const deleteProduct = (id) => async(dispatch) => {
   try{
      await axios.delete(`/api/v1/delprod/${id}`);
      dispatch(delete_product_success());
   }
   catch(error){
         console.log(error);
   }
} 

export const {create_product_success,get_product_success,focus_product,update_product_success,delete_product_success} = product_slice.actions;
export default product_slice.reducer;
