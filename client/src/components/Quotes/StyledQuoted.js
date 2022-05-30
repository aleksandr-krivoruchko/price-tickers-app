import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = (props) =>
  css`
    color: ${props.color};
   background-color: ${props.backgroundColor};

  `;

export const Indicator = styled.p`
  ${dynamicStyle};
  font-size: 20px;
  font-weight: 500;

`;

export const Price = styled.p`
font-size: 24px;
font-weight: 500;
`;

export const Box = styled.div`
display: flex;
justify-content: center;
align-items: baseline;
padding: 5px;
${dynamicStyle};
border-radius: 10px;
`;