import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { value: "", isLoading: true };

export const fetchAdvice = createAsyncThunk(
  "advice/fetchadvice",
  async (_, thunkAPI) => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await response.json();
    return slip.advice;
  }
);

export const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {
      
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdvice.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchAdvice.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAdvice.rejected, (state, action) => {
      state.isLoading = false;
      state.value = "Error! But you can always try again 😁";
    });
  },
});

export const selectIsLoading = (state) => state.advice.isLoading;
export const selectAdvice = (state) => state.advice.value;

export default adviceSlice.reducer;
