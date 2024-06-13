import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "./ProductService";
import { toast } from "react-toastify";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await ProductService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/get-a-product",
  async (prodId, thunkAPI) => {
    try {
      return await ProductService.getSingleProduct(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/add-product",
  async (prod, thunkAPI) => {
    try {
      console.log(prod);
      return await ProductService.addProduct(prod);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete-product",
  async (prodId, thunkAPI) => {
    try {
      return await ProductService.deleteProduct(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editProduct = createAsyncThunk(
  "product/edit-product",
  async (prodId, thunkAPI) => {
    try {
      return await ProductService.editProduct(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const ProductSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addedProd = action.payload;
        if (state.isSuccess) {
          toast.success("Product added successfully");
        }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (!state.isSuccess) {
          toast.error("Error in adding the product");
        }
      })

      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedProd = action.payload;
        if (state.isSuccess) {
          toast.success("Product deleted successfully");
        }
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (!state.isSuccess) {
          toast.error("Error in deleting the product");
        }
      })

      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedProd = action.payload;
        if (state.isSuccess) {
          toast.success("Product updated successfully");
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (!state.isSuccess) {
          toast.error("Error in updating the product");
        }
      })

      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default ProductSlice.reducer;
