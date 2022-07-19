import { useCycle } from 'framer-motion';
import { CloseCircleOutlined } from '@ant-design/icons';

import MenuNav from 'components/Molecules/MenuNav';
import { Menu } from 'components/Molecules/MenuNav/MenuNav';
import {
  CloseButton,
  MenuModal,
  MenuModalNav
} from 'components/Molecules/MenuNav/style';
import { NavbarNav, NavbarWrapper } from './style';

type NavbarProps = BaseComponent & {
  isScrolling?: boolean;
};

const variants = {
  open: {
    display: 'block',
    translateX: 0
  },
  closed: {
    display: 'none',
    translateX: 250,
  }
};

const Navbar = ({ isScrolling, ...props }: NavbarProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const onToggleNav = () => toggleOpen();

  return (
    <NavbarNav>
      <NavbarWrapper $isScrolling={isScrolling} {...props}>
        <MenuNav onToggle={onToggleNav} />
      </NavbarWrapper>

      <MenuModalNav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <MenuModal variants={variants}>
          <Menu onToggle={onToggleNav} />
          <CloseButton onClick={onToggleNav} bgColor="transparent">
            <CloseCircleOutlined />
          </CloseButton>
        </MenuModal>
      </MenuModalNav>
    </NavbarNav>
  );
};

export default Navbar;
