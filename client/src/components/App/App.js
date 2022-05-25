import { useEffect } from "react";
import { Container } from "../Container/Container";
import { TickersList } from "../TickersList/TickersList";
import { useDispatch} from 'react-redux';
import {tickers} from "../../redux/slice";


export function App() {
  const dispatch = useDispatch();

  // dispatch(tickers.startConnecting())
  
  return (<Container title='Price Tickers'>
    <TickersList />
  </Container>
  );
}
