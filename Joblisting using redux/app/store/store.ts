"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import dataSlice from "../data/dataSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);