import { createSlice, configureStore } from "@reduxjs/toolkit";

const homeStore = createSlice({
  name: "homeStore",
  initialState: {},
  reducers: {},
});

//export const = {} = homeStore.actions;

const store = configureStore({ reducer: homeStore.reducer });

export default store;
