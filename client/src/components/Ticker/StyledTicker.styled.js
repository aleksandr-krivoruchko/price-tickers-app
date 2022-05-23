import styled from '@emotion/styled';

export const StyledTicker = styled.li`
  display: flex;
  color: yellow;
  font-size: 20px;
  margin-bottom: 10px;
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