import { Ticker } from "../Ticker/Ticker";

export function TickersList({data}) {
   return <ul>
      {data.map(({ ticker, exchange, price, change, change_percent }) => (
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
}