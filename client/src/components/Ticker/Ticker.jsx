import PropTypes from 'prop-types';
import {StyledTicker } from './StyledTicker.styled';

export function Ticker({ ticker, exchange, price, change, change_percent }) {
   return <StyledTicker>
      <p>{`${ticker} => ${exchange}(US)`}</p>
      <p>{`${price}$ / ${change}$ / ${change_percent}%`}</p>
   </StyledTicker>
}

Ticker.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  change_percent: PropTypes.string.isRequired,
};
