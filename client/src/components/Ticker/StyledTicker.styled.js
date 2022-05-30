import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledTicker = styled.li`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

export const TextWrapper = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
`;
export const QuotesWrapper = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 14px;
  color: blue;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-right: 5px;
  margin-left: 20px;
`;
const dynamicStyle = (props) =>
  css`
    color: ${props.color};
  `;

export const Indicator = styled.p`
  ${dynamicStyle};
  font-size: 20px;
  margin-right: 15px;
`;
