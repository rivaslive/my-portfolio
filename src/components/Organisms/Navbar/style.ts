import styled, { css } from 'styled-components';
import Container from 'components/Atoms/Container';

const cssScrolling = css`
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(2 1 1 / 40%) 0 5px 20px -5px;
  background: ${({ theme }) => theme.colors.nav};
`;

export const NavbarNav = styled.nav``;

export const NavbarWrapper = styled(Container)<{ $isScrolling?: boolean }>`
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 12px 15px;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  width: calc(100% - 30px);
  z-index: ${({ theme }) => theme.zIndex.nav};

  ${({ $isScrolling }) => $isScrolling && cssScrolling};
`;
