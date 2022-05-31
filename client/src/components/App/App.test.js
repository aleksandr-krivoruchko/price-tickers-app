import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { renderWithRedux } from "../../helpers/renderWithRedux";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

test("renders App component", () => {
   render(<Provider store={store}>
      <App />
   </Provider>);
  expect(screen.getByText(/Price Tickers/i)).toBeInTheDocument();
  expect(screen.getByRole("list")).toBeInTheDocument();
});
