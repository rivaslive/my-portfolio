import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const StyleWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
  max-width: 650px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(54px);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

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

export const StyleBadge = styled.span`
  padding: 5px 10px;
  border-radius: 2rem;
  font-weight: normal;
  font-size: 0.7rem;
  background: ${({ theme }) => theme.colors.primaryOpacity};
`;
