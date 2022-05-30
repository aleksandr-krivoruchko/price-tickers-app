import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import tickersReducer from "../redux/slice";

const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      tickers: tickersReducer,
    },
    preloadedState: initialState,
  });
};
export function renderWithRedux(component, initialState) {
  const store = createReduxStore(initialState);
  return render(<Provider store={store}>{component}</Provider>);
}
