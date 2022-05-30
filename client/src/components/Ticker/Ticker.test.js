import { queryByRole, render, screen } from "@testing-library/react";
import { Ticker } from "./Ticker";
import { getCompanyNameByTicker } from "../../helpers/companyName";
import { usePriceDirectionColor } from "../../hooks/usePriceDirection";
import { Provider } from "react-redux";

const ticker = {
    ticker: "AAPL",
    exchange: "NASDAQ",
    price: '279.29',
    change: '64.52',
    change_percent: '0.84',
    dividend: '0.56',
    yield: '1.34',
    last_trade_time: "2021-04-30T11:53:21.000Z",
  }


describe("renders Ticker component", () => {

  test("renders empty component", () => {
  //       const companyName = getCompanyNameByTicker({ticker});
  // const color = usePriceDirectionColor({ticker});

    render(
      <Provider>
        <Ticker key={ticker.ticker}
            exchange={ticker.exchange}
            ticker={ticker.ticker}
            price={ticker.price}
            change={ticker.change}
          change_percent={ticker.change_percent} />
      </Provider>);
    // expect(screen.queryByRole("list-item")).toBeNull();
    expect(screen.getByRole("list-item")).toBeInTheDocument();
    expect(screen.getByText(/aapl/i)).toBeInTheDocument();

  });
});

// describe("get company name", () => {
//   test("getCompanyNameByTicker empty", () => {
//     expect(getCompanyNameByTicker("")).toBe("");
//   });
//   test("getCompanyNameByTicker filled", () => {
//     expect(getCompanyNameByTicker("FB")).toBe("Facebook");
//   });
//   test("getCompanyNameByTicker number", () => {
//     expect(getCompanyNameByTicker(5)).toBe("5");
//   });
// });

// const quotes = getQuotes();
// describe("get color of ticker", () => {
//   test("useColorOfTicker empty", () => {
//     expect(useColorOfTicker("")).toBe(undefined);
//   });
//   test("useColorOfTicker filled", () => {
//     expect(useColorOfTicker("FB")).toBe("red" || "green");
//   });
//   test("getCompanyNameByTicker number", () => {
//     expect(getCompanyNameByTicker(5)).toBe("5");
//   });
// });
