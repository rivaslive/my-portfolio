import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';
import Image from 'components/Atoms/Image';

export const StyleWrapper = styled.div`
  position: relative;
  padding: 1rem 1rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
  //max-width: 650px;
  margin: 0 auto;
  backdrop-filter: blur(54px);
  background: ${({ theme }) => theme.colors.bgCard};

  img {
    border-radius: 12px;
    margin: 0 auto;
    display: block;
  }

  ${mediaQueries.mobile} {
    flex-direction: row;
    padding: 2.5rem;

    img {
      margin-bottom: 0;
    }
  }
`;

export const StyleAnimation = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
`;

export const StyleContent = styled.div`
  margin-left: 0;

  .title-link:hover {
    text-decoration: underline;
  }

  ${mediaQueries.tablet} {
    margin-left: 30px;
  }
`;

export const StyleImage = styled(Image)`
  width: 100%;
  height: 420px;
  background-size: cover;
  position: relative;
  border-radius: 50px;
  padding-bottom: 20px;
  overflow: hidden;
  flex-shrink: 0;

  > span {
    width: 100% !important;
    height: 100% !important;
  }

  img {
    border-radius: 50px;
  }

  ${mediaQueries.tablet} {
    padding-bottom: 0;
    width: 250px;
  }
`;

export const StyleBadge = styled.span`
  padding: 5px 10px;
  border-radius: 2rem;
  font-weight: normal;
  font-size: 0.7rem;
  position: absolute;
  right: 0;
  top: -15px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.accentOpacity};
`;
