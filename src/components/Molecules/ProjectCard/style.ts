import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';
import Image from 'components/Atoms/Image';

export const StyleWrapper = styled.div`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
  max-width: 650px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(54px);

  img {
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  ${mediaQueries.mobile} {
    flex-direction: row;

    img {
      margin-bottom: 0;
    }
  }
`;

export const StyleImage = styled(Image)`
  width: 278px;
  height: 417px;
  background-size: cover;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease 0s;
    width: 100%;
    height: 100%;
  }

  canvas {
    position: absolute;
    z-index: 0;
    object-fit: cover;
    border-radius: 50px;

    width: 100% !important;
    height: 100% !important;
  }
`;
