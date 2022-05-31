import { screen } from "@testing-library/react";
import { Ticker } from "./Ticker";
import { renderWithRedux } from "../../helpers/renderWithRedux";

const filledInitialState = {
  tickers: {
    quotes: [
  {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: "279.29",
    change: "64.52",
    change_percent: "0.84",
  },
  {
    ticker: "GOOGL",
    exchange: "NASDAQ",
    price: "237.08",
    change: "154.38",
    change_percent: "0.1",
  }
]
  }
}
const emptyInitialState = {
  tickers: {
    quotes: []
  }
}

describe("renders Ticker component", () => {
  
  test("renders with empty props", () => {
    renderWithRedux(<Ticker ticker = ""
  price = ""
  change = ""
  change_percent = ""
    />, emptyInitialState);
    expect(screen.queryByRole("list-item")).toBeNull();
  });

  test("renders with filled props", () => {
    const { ticker, exchange, price, change, change_percent } = filledInitialState.tickers.quotes[0];
    renderWithRedux(
      <Ticker
        ticker={ticker}
        exchange={exchange}
        price={price}
        change={change}
        change_percent={change_percent}
      />,
      filledInitialState
    );
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
  });
});
