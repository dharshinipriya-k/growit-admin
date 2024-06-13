import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/AuthSlice';
import blogReducer from '../features/blog/BlogSlice';
import blogCatReducer from '../features/blogCategory/BlogCatSlice';
import categoryReducer from '../features/category/CategorySlice';
import customerReducer from "../features/customers/CustomerSlice";
import enquiryReducer from '../features/enquiry/EnquirySlice';
import productReducer from '../features/product/ProductSlice';
import uploadReducer from '../features/upload/UploadSlice';

export const store = configureStore({   
    reducer: {
        auth: authReducer, 
        customer: customerReducer,
        product: productReducer,
        category: categoryReducer,
        blog: blogReducer,
        blogcat: blogCatReducer,
        enquiry: enquiryReducer,
        upload: uploadReducer
     },
})
