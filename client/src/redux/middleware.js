import { tickers } from "./slice";
import { useSocketConnection } from "../hooks/useSocketConnection";

const tickersMiddleware = (store) => (next) => (action) => {
  if (!tickers.startConnecting.match(action)) {
    return next(action);
  }
  useSocketConnection();

  next(action);
};

export default tickersMiddleware;
