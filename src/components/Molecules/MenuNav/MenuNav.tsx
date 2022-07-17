import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';
import Brand from 'components/Atoms/Brand';
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
  return (
    <StyleMenuNav {...props}>
      <StyleBrand fontSize="2.2rem" className="brand-top" />

      <Link href="#home" passHref>
        <StyleLink>Home</StyleLink>
      </Link>
      <Link href="#who-we-are" passHref>
        <StyleLink>Who We Are</StyleLink>
      </Link>
      <Link href="#tech" passHref>
        <StyleLink>Technologies</StyleLink>
      </Link>

      <StyleBrand className="brand-center" />

      <Link href="#experience" passHref>
        <StyleLink>Experiences</StyleLink>
      </Link>
      <Link href="#contact" passHref>
        <StyleLink className="contact-me">Contact</StyleLink>
      </Link>
      <Link href="#education" passHref>
        <StyleLink>Education</StyleLink>
      </Link>
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
        className="only-mobile"
        bgColor="accentOpacity"
      >
        <MenuOutlined />
      </MenuBurger>
    </StyleWrapper>
  );
};

export default MenuNav;
