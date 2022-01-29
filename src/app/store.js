import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import adviceReducer from "../features/advice/adviceSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    advice: adviceReducer,
  },
});
