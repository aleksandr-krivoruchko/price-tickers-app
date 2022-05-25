import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
  isEstablishingConnection: false,
  isConnected: false
};
 
const tickersSlice = createSlice({
  name: 'tickers',  
  initialState,
  reducers: {
    quotes: (state, action) => {
      return { ...state, quotes: action.payload };
    },
    startConnecting: (state => {
      state.isConnected = true;
    }),
    connectionEstablished: (state => {
      state.isConnected = true;
      state.isEstablishingConnection = true;
    }),
  },
});

export const  tickers  = tickersSlice.actions;

export default tickersSlice.reducer;

 
 
