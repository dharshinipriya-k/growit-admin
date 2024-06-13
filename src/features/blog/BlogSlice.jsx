import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import BlogService from './BlogService';
import {toast} from 'react-toastify'

export const getBlogs = createAsyncThunk(
  "blogs/get-blogs",
  async (thunkAPI) => {
    try {
      return await BlogService.getBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createBlog = createAsyncThunk(
  'blogs/create-blog',
  async(blog, thunkAPI) => {
    try {
      return await BlogService.createBlog(blog)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteBlog = createAsyncThunk(
  'blogs/delete-blog',
  async(blogId, thunkAPI) => {
    try {
      return await BlogService.deleteBlog(blogId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const BlogSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getBlogs.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getBlogs.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.blogs = action.payload
        })
        .addCase(getBlogs.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })

        .addCase(createBlog.pending, (state)=>{
          state.isLoading = true
      })
      .addCase(createBlog.fulfilled, (state, action)=>{
          state.isLoading = false
          state.isError = false
          state.isSuccess = true
          state.newBlog = action.payload
          if(state.isSuccess){
            toast.success('Blog created Successfully!')
          }
      })
      .addCase(createBlog.rejected, (state, action)=>{
          state.isLoading = false
          state.isError = true
          state.isSuccess = false
          state.message = action.error
      })

      .addCase(deleteBlog.pending, (state)=>{
        state.isLoading = true
    })
    .addCase(deleteBlog.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.deletedBlog = action.payload
        if(state.isSuccess){
          toast.success('Blog deleted Successfully!')
        }
    })
    .addCase(deleteBlog.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
    })
    },
})

export default BlogSlice.reducer;