import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useColorOfTicker(title) {
  const quotes = useSelector(({ tickers }) => tickers.quotes);
  const ticker = quotes.find(({ ticker }) => ticker === title);
  const prev = usePrevious(ticker.price);
  return prev > ticker.price ? "red" : "green";
}
