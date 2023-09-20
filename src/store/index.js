import { authReducer } from "./auth-slice";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product/product-slice";


export const store = configureStore({
    reducer: {
        authSlice:authReducer,
        productSlice:productReducer,
    }
});
