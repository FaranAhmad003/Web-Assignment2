import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";
import projectReducer from "./projectSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
store.subscribe(() => {
  localStorage.setItem(
    "portfolioState",
    JSON.stringify(store.getState().portfolio)
  );
});

export default store;
