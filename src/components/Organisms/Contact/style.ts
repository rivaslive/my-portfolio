import styled from 'styled-components';
import Image from 'components/Atoms/Image';
import { mediaQueries } from 'styles/theme';

export const StyleImage = styled(Image)`
  img {
    height: 200px;

    ${mediaQueries.mobile} {
      height: 400px;
    }
  }
`;
