import { Ticker } from "../Ticker/Ticker";
import { useSelector } from "react-redux";

export function TickersList() {
  const quotes = useSelector((state) => state.tickers.quotes);
  return (
    <ul>
      {quotes &&
        quotes.map(({ ticker, exchange, price, change, change_percent }) => (
          <Ticker
            key={ticker}
            exchange={exchange}
            ticker={ticker}
            price={price}
            change={change}
            change_percent={change_percent}
          />
        ))}
    </ul>
  );
}
