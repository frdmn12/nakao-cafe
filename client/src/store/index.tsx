import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer  from "../features/AuthSlice";
import {  persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";



const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  auths: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
