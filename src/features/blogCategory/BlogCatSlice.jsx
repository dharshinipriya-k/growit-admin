import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import BlogCatService from './BlogCatService';

export const getBlogCat = createAsyncThunk(
  "blogcat/get-blogcat",
  async (thunkAPI) => {
    try {
      return await BlogCatService.getBlogCat();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
    blogcat: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const BlogCatSlice = createSlice({
    name: "blogcat",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getBlogCat.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getBlogCat.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.blogcat = action.payload
        })
        .addCase(getBlogCat.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
    },
})

export default BlogCatSlice.reducer;