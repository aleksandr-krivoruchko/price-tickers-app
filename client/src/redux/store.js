import { configureStore } from '@reduxjs/toolkit'
import tickersReducer from './slice'
import  tickersMiddleware  from "./middleware";

export const store = configureStore({
   reducer: {
     tickers: tickersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tickersMiddleware),
})