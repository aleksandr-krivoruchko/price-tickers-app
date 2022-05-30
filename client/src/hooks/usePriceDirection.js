import { useSelector } from "react-redux";
import { usePrevious } from "./usePrevious";
import { colors } from "../constants/colors";

export function usePriceDirectionColor(title) {
  const {darkRed, darkGreen } = colors;
  const quotes = useSelector(({ tickers }) => tickers.quotes);
  const ticker = quotes.find(({ ticker }) => ticker === title);
  const prev = usePrevious(ticker.price);
  return prev > ticker.price ? darkRed : darkGreen;
}
