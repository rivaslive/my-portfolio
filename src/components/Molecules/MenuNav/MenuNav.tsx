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
import links from 'components/Molecules/MenuNav/links';

type MenuNavProps = BaseComponent & {
  onToggle?: () => void;
  activeKey: string;
};

export const Menu = ({ onToggle, activeKey, ...props }: MenuNavProps) => {
  const { t } = useTranslation();
  return (
    <StyleMenuNav {...props}>
      <StyleBrand fontSize="2.2rem" className="brand-top" />

      {links(t).map((item) => {
        if (item.type === 'brand') {
          return <StyleBrand key={item.key} className="brand-center" />;
        }
        return (
          <Link key={item.key} href={item.href as string} passHref>
            <StyleLink
              onClick={onToggle}
              color={item?.color}
              className={item?.className}
              $active={activeKey === item.href}
            >
              {item.label}
            </StyleLink>
          </Link>
        );
      })}

      <StyleLinks>
        <SocialLinks />
      </StyleLinks>
    </StyleMenuNav>
  );
};

const MenuNav = ({ onToggle, activeKey, ...props }: MenuNavProps) => {
  return (
    <StyleWrapper {...props}>
      <Menu activeKey={activeKey} onToggle={onToggle} className="only-desk" />

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
