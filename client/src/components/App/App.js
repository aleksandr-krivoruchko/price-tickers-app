import socket from "./socket";
import { useEffect, useState } from "react";

export function App() {
  const [quotes, setQuotes] = useState();

  socket.emit("start");
  socket.on("ticker", function (response) {
    const res = Array.isArray(response) ? response : [response];

    const json = res.map((item) => JSON.stringify(item)).join("\n");
    const data = `<pre>${json}</pre><hr />`;
    setQuotes(data);
    return json;
  });
  return (
    <>
      <h1>qqqq</h1>
    </>
  );
}
