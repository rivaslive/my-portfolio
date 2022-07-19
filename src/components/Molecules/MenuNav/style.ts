import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';
import Brand from 'components/Atoms/Brand';
import Button from 'components/Atoms/Button';
import {motion} from 'framer-motion';

export const StyleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  ${mediaQueries.tablet} {
    justify-content: center;
  }

  .only-desk {
    display: none;

    ${mediaQueries.tablet} {
      display: flex;
    }
  }

  .only-mobile {
    display: flex;

    ${mediaQueries.tablet} {
      display: none;
    }
  }
`;

export const StyleMenuNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQueries.tablet} {
    flex-direction: row;
  }
`;

export const StyleMenuMobileNav = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQueries.tablet} {
    flex-direction: row;
  }
`;

export const StyleLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 0;
  margin-top: 20px;

  ${mediaQueries.tablet} {
    position: absolute;
    margin-top: 0;
  }
`;

export const StyleLink = styled.a`
  margin: 5px;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 600;
  transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryOpacity};
  }

  &.contact-me {
    color: white;
    background: ${({ theme }) => theme.colors.accentOpacity};

    &:hover {
      color: white;
      opacity: 0.8;
    }
  }
`;

export const StyleBrand = styled(Brand)`
  &.brand-top {
    display: block;
    margin: 40px auto 10px;

    ${mediaQueries.tablet} {
      display: none;
    }
  }

  &.brand-center {
    display: none;

    ${mediaQueries.tablet} {
      display: block;
    }
  }
`;

export const MenuBurger = styled(Button)`
  position: relative;
  padding: 0 10px;
  min-width: auto;
  font-size: 1.5rem;
`;

export const CloseButton = styled(MenuBurger)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const MenuModalNav = styled(motion.nav)``;

export const MenuModal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  padding: 20px 15px;
  transition: all 0.2s ease-in-out;
  background: ${({ theme }) => theme.colors.bgModal};
  box-shadow: rgb(2 1 1 / 40%) 0 5px 20px -5px;
  z-index: ${({ theme }) => theme.zIndex.nav};
`;
