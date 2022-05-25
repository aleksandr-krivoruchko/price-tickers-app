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

export const ButtonStyle = styled.button`
  margin-right: 20px;
  color: yellow;
  background-color: transparent;
  border-color: yellow;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 2px solid blue;
    color: blue;
  }
`;
export const TextWrapper = styled.div`
  min-width: 50%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const Text = styled.p`
  font-size: 14px;
  color: blue;
`;
export const Name = styled.p`
  color: #000000;
  font-size: 30px;
  margin-right: 5px;
  margin-left: 10px;
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
