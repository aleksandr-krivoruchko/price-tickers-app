import styled from '@emotion/styled';

export const StyledTicker = styled.li`
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: yellow;
  font-size: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid yellow;
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
export const Text = styled.p`
color: blue;
margin-right:15px;
`;
export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: end;
`;