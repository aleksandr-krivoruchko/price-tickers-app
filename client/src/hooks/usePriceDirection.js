import { useSelector } from "react-redux";
import { usePrevious } from "./usePrevious";
import { colors } from "../constants/colors";

export function usePriceDirectionColor(title) {
    const { darkRed, darkGreen, gray } = colors;
  const quotes = useSelector(({ tickers }) => tickers.quotes);
  const ticker = quotes.find(({ ticker }) => ticker === title);
  const previousPrice = usePrevious(ticker?.price);

  if (!title) {
    return gray;
  }
  return previousPrice > ticker?.price ? darkRed : darkGreen;
}
