import styled from 'styled-components';
import Container from 'components/Atoms/Container';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  border-top: 1.5px solid ${({ theme }) => theme.colors.borderColor};
`;

export const FooterBody = styled(Container)`
  padding: 15px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
