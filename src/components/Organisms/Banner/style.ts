import styled from 'styled-components';
import Container from 'components/Atoms/Container';
import Image from 'components/Atoms/Image';
import { Row } from 'components/Atoms/Grid';
import { mediaQueries } from 'styles/theme';

export const BannerWrapper = styled.div`
  position: relative;
  min-height: 75vh;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 110vh;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.min};
    background: ${({ theme }) => theme.colors.background};
    background: url('/fig-1.svg') no-repeat no-repeat;
    background-position: bottom center;
    background-size: cover;

    ${mediaQueries.desktop} {
      height: 130vh;
    }
  }
`;

export const BannerContent = styled(Container)`
  border-radius: 30px;
  padding-top: 120px;
`;

export const BannerBottomContent = styled(Row)`
  margin-top: 3rem;
`;

export const StyleImage = styled(Image)`
  text-align: center;

  img {
    width: 100%;
    margin: 0 auto;

    ${mediaQueries.mobile} {
      width: 400px;
    }

    ${mediaQueries.desktop} {
      width: 500px;
    }
  }

  ${mediaQueries.tablet} {
    text-align: left;

    img {
      margin: 0 0;
    }
  }
`;
