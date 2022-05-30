import { tickers } from "../redux/slice";
import { useDispatch } from "react-redux";

export function useStart() {
const dispatch = useDispatch();
dispatch(tickers.startConnecting()); 
}
