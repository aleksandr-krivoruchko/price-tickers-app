import { Container } from "../Container/Container";
import { TickersList } from "../TickersList/TickersList";
import { useStart } from "../../hooks/useStart";
import { Toaster } from "react-hot-toast";

export function App() {
  useStart();
  return (
    <Container title="Price  Tickers">
      <TickersList />
      <Toaster position="top-left" duration={3000} />
    </Container>
  );
}
