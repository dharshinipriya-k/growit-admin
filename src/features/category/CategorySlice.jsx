import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import CategoryService from './CategoryService';
import {toast} from 'react-toastify'

export const getCategory = createAsyncThunk(
  "category/get-category",
  async (thunkAPI) => {
    try {
      return await CategoryService.getCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCategory = createAsyncThunk(
  'category/add-category',
  async(category, thunkAPI) => {
    try {
      return await CategoryService.addCategory(category)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deleteCategory = createAsyncThunk(
  'category/delete-category',
  async(catID, thunkAPI) => {
    try {
      return await CategoryService.deleteCategory(catID)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
    categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const CategorySlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getCategory.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getCategory.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.categories = action.payload
        })
        .addCase(getCategory.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })

        .addCase(addCategory.pending, (state)=>{
          state.isLoading = true
      })
      .addCase(addCategory.fulfilled, (state, action)=>{
          state.isLoading = false
          state.isError = false
          state.isSuccess = true
          state.category = action.payload
          if(state.isSuccess){
            toast.success('Category created successfully!')
          }
      })
      .addCase(addCategory.rejected, (state, action)=>{
          state.isLoading = false
          state.isError = true
          state.isSuccess = false
          state.message = action.error
          if(! state.isSuccess){
            toast.error(`${action.payload.response.data.message }`)
          }
      })

      .addCase(deleteCategory.pending, (state)=>{
        state.isLoading = true
    })
    .addCase(deleteCategory.fulfilled, (state, action)=>{
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.deltedCategory = action.payload
        if(state.isSuccess){
          toast.success('Category Deleted successfully!')
        }
    })
    .addCase(deleteCategory.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        if(! state.isSuccess){
          toast.error(`${action.payload.response.data.message }`)
        }
    })
    },
})

export default CategorySlice.reducer;