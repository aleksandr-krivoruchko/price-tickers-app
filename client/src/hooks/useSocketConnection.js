import { io } from "socket.io-client";
import { tickers } from "../redux/slice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const URL = "http://localhost:4000";

export function useSocketConnection() {
   const dispatch = useDispatch();

  const socket = io(URL);

  socket.on("connect_error", (error) => {
  toast.error("Sorry, connection with the server is not established")
  socket.disconnect();
});
  
  
  socket.on("connect", () => {
    dispatch(tickers.connectionEstablished());
  });

  socket.emit("start");
  socket.on("ticker", (response) => {
    dispatch(tickers.quotes(response));
  });
}




