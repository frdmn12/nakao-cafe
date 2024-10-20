import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

interface CartItemState {
  loading: boolean;
  cartList: any[];
  userInfo: object | null;
  userToken: string | null;
  error: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: CartItemState = {
  loading: false,
  cartList: [],
  userInfo: null,
  userToken: null,
  error: null,
  status: "idle",
};

export const listCartProduct = createAsyncThunk(
  "cart/listCartProduct",
  async (data: { userId: string; token: string }) => {
    try {
      const res = await axios.get(
        `${API_URL}/api/carts/get-cart/${data.userId}`,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      return res.data;
    } catch (err: unknown) {
      console.error(err);
      toast.error(err.response.data.message);
      throw err;
    }
  }
);

// add product to cart
export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (data: { userId: string; productId: number; qty: number, token: string }) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/carts/add-to-cart`,
        {
          userId: data.userId,
          productId: data.productId,
          quantity: data.qty,
        },
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      toast("Product Added to Cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return res.data;
    } catch (err: unknown) {
      console.error(err);
      toast.error(err.response.data.message);
      throw err;
    }
  }
);

// update cart by product
export const updateCartProduct = createAsyncThunk(
  "cart/updateCartProduct",
  async (data: { userId: string; productId: string; qty: number }) => {
    try {
      const res = await axios.put(
        `${API_URL}/api/cart/update-cart/${data.productId}`,
        {
          userId: data.userId,
          quantity: data.qty,
        }
      );
      return res.data;
    } catch (err: unknown) {
      console.error(err);
      toast.error(err.response.data.message);
      throw err;
    }
  }
);

// remove product from cart
export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (data: { userId: string; productId: string }) => {
    try {
      const res = await axios.delete(`${API_URL}/api/cart/remove-from-cart/`, {
        data: {
          userId: data.userId,
        },
      });
      return res.data;
    } catch (err: unknown) {
      console.error(err);
      toast.error(err.response.data.message);
      throw err;
    }
  }
);

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCartProduct.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(listCartProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.cartList = action.payload;
      })
      .addCase(listCartProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });

    builder
      .addCase(addProductToCart.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.status = "success";
        state.cartList = action.payload;
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });

    builder
      .addCase(updateCartProduct.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.cartList = action.payload;
      })
      .addCase(updateCartProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });

    builder
      .addCase(removeProductFromCart.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.status = "success";
        state.cartList = action.payload;
      })
      .addCase(removeProductFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

export default cartSlice.reducer;
