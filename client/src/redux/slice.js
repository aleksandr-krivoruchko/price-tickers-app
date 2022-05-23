import { createSlice } from '@reduxjs/toolkit';

export const tickersSlice = createSlice({
  name: 'tickers',
  initialState: [],
  reducers: {
    tickers: (_, action) => action.payload,
  },
})

export const { tickers } = tickersSlice.actions;

export default tickersSlice.reducer;