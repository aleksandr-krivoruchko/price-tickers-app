import { io } from "socket.io-client";

const URL = "http://localhost:4000";

const socket = io.connect(URL);

export function getData() {
   socket.emit("start");
  socket.on("ticker", function (response) {
    return response.data;
  });
}

export default socket;
