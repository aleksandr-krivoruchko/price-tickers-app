import PropTypes from "prop-types";
import { Indicator, Price, Box } from "./StyledQuoted";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { colors } from "../../constants/colors";

const { lightGreen, lightRed, darkRed, gray } = colors;

const formattedValue = (value) => {
  return `${Number(value).toFixed(2)}`;
};

export function PriceQuote({ value }) {
  if (value === "" || isNaN(formattedValue(value))) {
    return <Indicator color={gray}>0$</Indicator>;
  }

  return <Price>{`${formattedValue(value)}$`}</Price>;
}

export function PriceChange({ value, color }) {
  if (value === "" || isNaN(formattedValue(value))) {
    return <Indicator color={gray}>0$</Indicator>;
  }

  return (
    <Indicator color={color}>
      {color === darkRed
        ? `-${formattedValue(value)}$`
        : `+${formattedValue(value)}$`}
    </Indicator>
  );
}

export function PercentagePriceChange({ value, color }) {
  if (value === "" || isNaN(formattedValue(value))) {
    return (
      <Box backgroundColor={gray}>
        <Indicator color="#fff">0%</Indicator>
      </Box>
    );
  }
  return (
    <Box backgroundColor={color === darkRed ? lightRed : lightGreen}>
      {color === darkRed ? (
        <BsArrowDown color={color} data-testid="arrow-down" />
      ) : (
        <BsArrowUp color={color} data-testid="arrow-up" />
      )}
      <Indicator color={color}>{`${formattedValue(value)}%`}</Indicator>
    </Box>
  );
}

PriceQuote.propTypes = {
  value: PropTypes.string.isRequired,
};
PriceChange.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
PercentagePriceChange.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
