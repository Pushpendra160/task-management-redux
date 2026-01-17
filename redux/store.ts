import { configureStore } from "@reduxjs/toolkit";
import { todoReducers } from "./todoSlice";

const store = configureStore({
    reducer: todoReducers
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;