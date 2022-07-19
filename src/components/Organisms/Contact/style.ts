import styled from 'styled-components';
import Image from 'components/Atoms/Image';
import { mediaQueries } from 'styles/theme';

export const StyleImage = styled(Image)`
  img {
    height: 200px;
    filter: drop-shadow(0 20px 53px #38173d);

    ${mediaQueries.mobile} {
      height: 400px;
    }
  }
`;
