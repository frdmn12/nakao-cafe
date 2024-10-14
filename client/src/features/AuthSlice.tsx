import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constant";

interface AuthState {
  loading: boolean;
  userInfo: object | null;
  userToken: string | null;
  error: string | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  status: "idle",
};

// Async thunk for user login
export const userLogin = createAsyncThunk(
  "auths/userLogin",
  async (data: { email: string; password: string }) => {
    // console.log('helo',data, API_URL);
    try {
      const res = await axios.post(`${API_URL}/api/users/login`, {
        email: data.email,
        password: data.password,
      });
      // console.log(data);
      // console.log(res.data);
      return res.data;
    } catch (err: unknown) {
      console.error(err);
    }
  }
);

export const userSignUp = createAsyncThunk(
  "auths/userSignUp",
  async (data: { name: string; email: string; password: string }) => {
    try {
      const res = await axios.post(`${API_URL}/api/users/signup`, {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "1",
      });
      // console.log(res.data);
      return res.data;  
    } catch (err: unknown) {
      console.error(err);
    }
  }
);



export const authSlice = createSlice({
  name: "auths",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.userToken = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        state.userToken = action.payload.token;
        state.userInfo = action.payload.userData;
        state.error = null;
        console.log("User logged in:", action.payload);
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload as string;
        console.log("Login error:", action.payload);
      })
      .addCase(userSignUp.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignUp.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        state.userToken = action.payload.token;
        state.userInfo = action.payload.userData;
        state.error = null;
        console.log("User registered:", action.payload);
      })
      .addCase(userSignUp.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload as string;
        console.log("Register error:", action.payload);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
