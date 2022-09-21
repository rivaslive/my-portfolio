import styled from 'styled-components';
import Container from 'components/Atoms/Container';

export const StyleNpmWrapper = styled(Container)`
  margin: 20px auto 75px;
`;

export const StyleNpm = styled.article`
  display: flex;
  align-items: center;
  margin: 30px 0;
  padding: 20px;
  cursor: pointer;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.bgCard};
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in;
  }
`;

export const StyleNpmContent = styled.div`
  flex: 1;
`;
