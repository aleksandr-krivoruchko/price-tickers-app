 import { render, screen } from "@testing-library/react";
import { PriceQuote, PriceChange, PercentagePriceChange } from "./Quotes";
import { colors } from "../../constants/colors";
 
const { lightGreen, darkRed } = colors;

 describe("renders PriceQuote component", () => {
  test("renders with empty value", () => {
    render(<PriceQuote value=''/>);
    expect(screen.getByText("0$")).toBeInTheDocument();
  });

  test("renders with valid value", () => {
    render(<PriceQuote value="22" />);
    expect(screen.getByText('22.00$')).toBeInTheDocument();
  });
      test("renders with invalid value", () => {
    render(<PriceQuote value="qqq" />);
    expect(screen.getByText('0$')).toBeInTheDocument();
  });
 });

describe("renders PriceChange component", () => {
  test("renders with empty props", () => {
    render(<PriceChange value='' color=''/>);
   expect(screen.getByText("0$")).toBeInTheDocument();
   expect(screen.getByText("0$")).toHaveProperty('className');
  });

  test("renders + number operator", () => {
    render(<PriceChange value='77.1256' color={darkRed}/>);
   expect(screen.getByText("-77.13$")).toBeInTheDocument();
});
test("renders - number operator", () => {
    render(<PriceChange value='77.1256' color={lightGreen}/>);
   expect(screen.getByText("+77.13$")).toBeInTheDocument();
});
   });

   describe("renders PercentagePriceChange component", () => {
  test("renders with empty props", () => {
    render(<PercentagePriceChange value='' color=''/>);
   expect(screen.getByText("0%")).toBeInTheDocument();
   expect(screen.getByText("0%")).toHaveProperty('className');
   expect(screen.queryByTestId("arrow-down")).toBeNull();
   expect(screen.queryByTestId("arrow-up")).toBeNull();
  });

  test("renders with arrow-down", () => {
    render(<PercentagePriceChange value='1' color={darkRed}/>);
     expect(screen.getByText("1.00%")).toBeInTheDocument();
        expect(screen.getByTestId("arrow-down")).toBeInTheDocument();
  });
      
test("renders with arrow-up", () => {
    render(<PercentagePriceChange value='1' color={lightGreen}/>);
     expect(screen.getByText("1.00%")).toBeInTheDocument();
        expect(screen.getByTestId("arrow-up")).toBeInTheDocument();
});
   });
