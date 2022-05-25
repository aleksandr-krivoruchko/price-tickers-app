import PropTypes from "prop-types";
import IcomoonReact from "icomoon-react";
import iconSet from "../../icons/selection.json";
import { useColorOfTicker } from "../../services/hooks";
import { GrFormUp, GrFormDown } from "react-icons/gr";
import {
  StyledTicker,
  Text,
  TextWrapper,
  Indicator,
  Name,
} from "./StyledTicker.styled";
import { getCompanyNameByTicker } from "../../services/companyName";

export function Ticker({ ticker, price, change, change_percent }) {
  const companyName = getCompanyNameByTicker(ticker);
  const color = useColorOfTicker(ticker);
  return (
    <StyledTicker>
      <TextWrapper>
        <IcomoonReact
          iconSet={iconSet}
          size={50}
          icon={companyName.toLowerCase()}
        />
        <Name>{companyName}</Name>
        <Text>{ticker}</Text>
      </TextWrapper>
      <TextWrapper>
        <Indicator>{`${price}$`}</Indicator>
        <Indicator color={color}>
          {color === "red" ? `-${change}$` : `+${change}$`}
        </Indicator>
        {color === "red" ? (
          <>
            <GrFormDown color="red" />
            <Indicator color={color}>{`${Number(change_percent).toFixed(
              2
            )}%`}</Indicator>
          </>
        ) : (
          <>
            <GrFormUp color="green" />
            <Indicator color={color}>{`${Number(change_percent).toFixed(
              2
            )}%`}</Indicator>
          </>
        )}
        {/* <Indicator color={color}>{`${Number(change_percent).toFixed(
          2
        )}%`}</Indicator> */}
      </TextWrapper>
    </StyledTicker>
  );
}

// Ticker.propTypes = {
//   ticker: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   change: PropTypes.number.isRequired,
//   change_percent: PropTypes.number.isRequired,
// };
