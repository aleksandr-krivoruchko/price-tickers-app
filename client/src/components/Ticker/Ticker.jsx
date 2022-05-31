import PropTypes from "prop-types";
import IcomoonReact from "icomoon-react";
import iconSet from "../../icons/selection.json";
import {
  StyledTicker,
  Text,
  TextWrapper,
  QuotesWrapper,
  Name,
} from "./StyledTicker.styled";
import { getCompanyNameByTicker } from "../../helpers/companyName";
import { usePriceDirectionColor } from "../../hooks/usePriceDirection";
import {
  PriceQuote,
  PriceChange,
  PercentagePriceChange,
} from "../Quotes/Quotes";

export function Ticker({
  ticker,
  price,
  change,
  change_percent,
}) {
  const companyName = getCompanyNameByTicker(ticker);
  const color = usePriceDirectionColor(ticker);
  return (
    ticker && <StyledTicker>
      <TextWrapper>
        <IcomoonReact
          iconSet={iconSet}
          size={50}
          icon={companyName.toLowerCase()}
        />
        <Name>{companyName}</Name>
        <Text>{ticker}</Text>
      </TextWrapper>
      <QuotesWrapper>
        <PriceQuote value={price} />
        <PriceChange value={change} color={color} />
        <PercentagePriceChange value={change_percent} color={color} />
      </QuotesWrapper>
    </StyledTicker>
  );
}

Ticker.propTypes = {
  ticker: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  change_percent: PropTypes.string.isRequired,
};
