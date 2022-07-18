import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const StyleWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  max-width: 650px;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(35, 37, 49, 0.5),
    rgba(15, 15, 24, 0.5)
  );
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