import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import Brand from 'components/Atoms/Brand';
import Button from 'components/Atoms/Button';
import { useAppTheme } from 'context/AppTheme';
import { MoonIcon, SunIcon } from 'components/Atoms/icons';
import {
  StyleMenuNav,
  StyleLink,
  StyleBrand,
  StyleWrapper,
  MenuBurger
} from './style';

type MenuNavProps = BaseComponent & {
  onToggle?: () => void;
};

export const Menu = (props: BaseComponent) => {
  const { themeToggle, theme } = useAppTheme();

  return (
    <StyleMenuNav {...props}>
      <StyleBrand fontSize="2.2rem" className="brand-top" />

      <Link href="/" passHref>
        <StyleLink>Home</StyleLink>
      </Link>
      <Link href="#tech" passHref>
        <StyleLink>Technologies</StyleLink>
      </Link>

      <StyleBrand className="brand-center" />

      <Link href="#experience" passHref>
        <StyleLink>Experience</StyleLink>
      </Link>
      <Link href="#contact" passHref>
        <StyleLink color="white" className="contact-me">
          Contact
        </StyleLink>
      </Link>

      <Button
        color="text"
        variant="icon"
        onClick={themeToggle}
        bgColor="transparent"
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </StyleMenuNav>
  );
};

const MenuNav = ({ onToggle, ...props }: MenuNavProps) => {
  return (
    <StyleWrapper {...props}>
      <Menu className="only-desk" />

      <Brand fontSize="2rem" className="only-mobile" />

      <MenuBurger
        onClick={onToggle}
        variant="icon"
        className="only-mobile"
        bgColor="accentOpacity"
      >
        <MenuOutlined />
      </MenuBurger>
    </StyleWrapper>
  );
};

export default MenuNav;
