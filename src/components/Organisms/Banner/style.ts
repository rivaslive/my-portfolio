import styled from 'styled-components';
import Container from 'components/Atoms/Container';
import Image from 'components/Atoms/Image';
import { Row } from 'components/Atoms/Grid';
import { mediaQueries } from 'styles/theme';

export const BannerWrapper = styled.div`
  position: relative;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 960px;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.min};
    background: ${({ theme }) => theme.colors.background};
    background: url('/fig-1.svg') no-repeat no-repeat;
    background-position: top center;
    background-size: cover;
  }
`;

export const BannerContent = styled(Container)`
  border-radius: 30px;
  padding-top: 120px;
`;

export const BannerBottomContent = styled(Row)`
  margin-top: 50px;
`;

export const StyleImage = styled(Image)`
  text-align: center;

  img {
    width: 100%;
    margin: 0 auto;

    ${mediaQueries.mobile} {
      width: 400px;
    }
  }

  ${mediaQueries.tablet} {
    text-align: left;

    img {
      margin: 0 0;
    }
  }
`;
