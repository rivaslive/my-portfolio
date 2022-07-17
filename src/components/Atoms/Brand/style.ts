import styled from 'styled-components';
import Title from 'components/Atoms/Title';
import { mediaQueries } from 'styles/theme';

export const StyleBrand = styled(Title)`
  font-family: 'Rock Salt', cursive;
  margin: 0;

  ${mediaQueries.tablet} {
    margin: 0 20px;
  }
`;
