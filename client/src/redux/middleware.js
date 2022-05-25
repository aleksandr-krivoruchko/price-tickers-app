import { io } from "socket.io-client";
import { tickers } from "./slice";
import { useDispatch } from "react-redux";

const URL = "http://localhost:4000";

const tickersMiddleware = (store) => (next) => (action) => {
  if (!tickers.startConnecting.match(action)) {
    return next(action);
  }
  const dispatch = useDispatch();

  const socket = io(URL);

  socket.on("connect", () => {
    dispatch(tickers.connectionEstablished());
  });
  socket.emit("start");
  socket.on("ticker", (response) => {
    dispatch(tickers.quotes(response));
  });

  next(action);
};

export default tickersMiddleware;
