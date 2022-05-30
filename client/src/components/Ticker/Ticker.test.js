import { queryByRole, render, screen } from "@testing-library/react";
import { Ticker } from "./Ticker";
import { renderWithRedux } from "../../helpers/renderWithRedux";

const quotes = [
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
  },
];

describe("renders Ticker component", () => {
  test("renders without props component", () => {
    renderWithRedux(<Ticker />, {
      tickers: { quotes: [] },
    });
    expect(screen.queryByRole("list-item")).toBeNull();
  });
  test("renders with props component", () => {
    const { ticker, exchange, price, change, change_percent } = quotes[0];
    renderWithRedux(
      <Ticker
        ticker={ticker}
        exchange={exchange}
        price={price}
        change={change}
        change_percent={change_percent}
      />,
      {
        tickers: { quotes: quotes },
      }
    );
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
  });
});
