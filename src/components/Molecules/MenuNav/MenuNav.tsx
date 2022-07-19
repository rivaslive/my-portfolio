import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import Brand from 'components/Atoms/Brand';
import SocialLinks from 'components/Molecules/SocialLinks';
import {
  StyleMenuNav,
  StyleLink,
  StyleBrand,
  StyleWrapper,
  MenuBurger,
  StyleLinks
} from './style';
import useTranslation from 'hooks/useTransalation';

type MenuNavProps = BaseComponent & {
  onToggle?: () => void;
};

export const Menu = ({ onToggle, ...props }: MenuNavProps) => {
  const { t } = useTranslation();
  return (
    <StyleMenuNav {...props}>
      <StyleBrand fontSize="2.2rem" className="brand-top" />

      <Link href="/" passHref>
        <StyleLink onClick={onToggle}>{t('navbar.home', 'Inicio')}</StyleLink>
      </Link>
      <Link href="#tech" passHref>
        <StyleLink onClick={onToggle}>{t('navbar.technologies', 'Tecnologías')}</StyleLink>
      </Link>

      <StyleBrand className="brand-center" />

      <Link href="#experience" passHref>
        <StyleLink onClick={onToggle}>{t('navbar.experience', 'Experiencia')}</StyleLink>
      </Link>
      <Link href="#contact" passHref>
        <StyleLink onClick={onToggle} color="white" className="contact-me">
          {t('navbar.contact', 'Contacto')}
        </StyleLink>
      </Link>

      <StyleLinks>
        <SocialLinks />
      </StyleLinks>
    </StyleMenuNav>
  );
};

const MenuNav = ({ onToggle, ...props }: MenuNavProps) => {
  return (
    <StyleWrapper {...props}>
      <Menu onToggle={onToggle} className="only-desk" />

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
