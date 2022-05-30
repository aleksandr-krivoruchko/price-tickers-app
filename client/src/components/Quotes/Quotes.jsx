import { Indicator, Price, Box } from "./StyledQuoted";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { colors } from "../../constants/colors";
const {lightGreen, lightRed, darkRed } = colors;

export function PriceQuote({value}) {
   return <Price>{`${Number(value).toFixed(2)}$`}</Price>
}

export function PriceChange({value, color}) {
   return <Indicator color={color}>{color === darkRed ? `-${Number(value).toFixed(2)}$` : `+${Number(value).toFixed(2)}$`}
   </Indicator>
}

export function PercentagePriceChange({value, color}) {
   return <Box backgroundColor={color === darkRed ? lightRed : lightGreen}>
      {color === darkRed ? <BsArrowDown color={color}/> : <BsArrowUp color={color}/>}
   <Indicator color={color}>{`${Number(value).toFixed(2)}%`}</Indicator>
   </Box>
}