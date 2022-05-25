import PropTypes from 'prop-types';
import {StyledTicker, Text, TextWrapper } from './StyledTicker.styled';

export function Ticker({ ticker, exchange, price, change, change_percent }) {
   return <StyledTicker>
      <Text>{`${ticker} => ${exchange}(US)`}</Text>
      <TextWrapper>
         <Text>{`Price: ${price}$`}</Text>
      <Text>{`Change: ${change}$`}</Text>
      <Text>{(`Change_percent: ${change_percent.toFixed(2)}%   `)}</Text></TextWrapper>
   </StyledTicker>
}

Ticker.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  change_percent: PropTypes.string.isRequired,
};
