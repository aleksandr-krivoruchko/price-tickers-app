import { screen } from "@testing-library/react";
import { TickersList } from "./TickersList";
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
      },
    ],
  },
};
const emptyInitialState = {
  tickers: {
    quotes: [],
  },
};

describe("renders TickerList component", () => {
  test("renders empty component", () => {
    renderWithRedux(<TickersList />, emptyInitialState);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("renders filled component", () => {
    renderWithRedux(<TickersList />, filledInitialState);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText(/Apple/i)).toBeInTheDocument();
    expect(screen.getByText(/Google/i)).toBeInTheDocument();
  });
});
