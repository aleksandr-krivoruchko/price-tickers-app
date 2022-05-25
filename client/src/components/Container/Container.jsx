import PropTypes from 'prop-types';
import { ContainerStyle, Title } from './StyledContainer.styled';

export function Container({ title, children }) {
  return (
    <ContainerStyle>
      <Title>{title}</Title>
      {children}
    </ContainerStyle>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};