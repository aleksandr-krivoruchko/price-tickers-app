import PropTypes from 'prop-types';
import { ContainerStyle} from './StyledContainer.styled';

export function Container({ children }) {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};