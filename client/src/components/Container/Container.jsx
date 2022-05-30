import PropTypes from "prop-types";
import { StyledContainer, Title } from "./StyledContainer.styled";

export function Container({ title, children }) {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      {children}
    </StyledContainer>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
