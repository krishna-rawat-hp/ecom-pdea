import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name:"productSlice",
    initialState: {
        products:[]
    },
    reducers: {
        setProducts: (currentSlice, action) =>{
            currentSlice.products = action.payload;
        },
        setProduct: (currentSlice, action)=>{
            currentSlice.products.push(action.payload);
        }
    },
});

export const {setProducts, setProduct} = productSlice.actions;
export const productReducer = productSlice.reducer;