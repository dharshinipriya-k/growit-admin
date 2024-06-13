import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import EnquiryService from './EnquiryService';

export const getEnquiry = createAsyncThunk(
  "enquiry/get-enquiry",
  async (thunkAPI) => {
    try {
      return await EnquiryService.getEnquiry();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
    enquiry: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const EnquirySlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getEnquiry.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getEnquiry.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.enquiry = action.payload
        })
        .addCase(getEnquiry.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = action.error
        })
    },
})

export default EnquirySlice.reducer;