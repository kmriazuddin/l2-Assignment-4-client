import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/todoSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
