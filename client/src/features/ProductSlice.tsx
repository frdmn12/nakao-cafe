import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constant";

interface ProductState {
  products: any[];
  status: "idle" | "loading" | "success" | "failed";
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await axios.get(`${API_URL}/api/products/get-all`);
      return res.data;
    } catch (err: unknown) {
      console.error(err);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: number) => {
    try {
      const res = await axios.get(`${API_URL}/api/products/get/${id}`);
      return res.data;
    } catch (err: unknown) {
      console.error(err);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message as string;
    });

    builder.addCase(getProductById.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message as string;
    });

  },
});

export default productSlice.reducer;
