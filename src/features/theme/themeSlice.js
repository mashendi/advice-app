import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme");

const initialState = {
  value: storedTheme ?? "light",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.value = state.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.value);
    },
  },
});

export const selectTheme = (state) => state.theme.value;

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
