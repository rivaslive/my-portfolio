import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';
import Image from 'components/Atoms/Image';

export const StyleBrand = styled(Image)`
  font-family: 'Rock Salt', cursive;
  margin: 0;

  ${mediaQueries.tablet} {
    margin: 0 20px;
  }
`;
