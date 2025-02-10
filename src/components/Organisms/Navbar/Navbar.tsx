import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

let ref: any;

const Navbar = ({ isScrolling, ...props }: NavbarProps) => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState('/');
  const [isOpen, setOpen] = useState(false);
  const [isOpenDelay, setOpenDelay] = useState(false);

  const onToggleNav = () => {
    setOpen((prev) => {
      clearTimeout(ref);
      const newPrev = !prev;

      if (!newPrev) {
        ref = setTimeout(() => {
          setOpenDelay(newPrev);
        }, 300);
      } else {
        setOpenDelay(newPrev);
      }

      return newPrev;
    });
  };

  useEffect(() => {
    if (!!router?.asPath) {
      const splitPath = router.asPath?.split('/');
      const lastSplit = splitPath[splitPath.length - 1];
      setActiveKey(`/${lastSplit ?? ''}`);
    }
  }, [router?.asPath]);

  return (
    <NavbarNav>
      <NavbarWrapper size="large" $isScrolling={isScrolling} {...props}>
        <MenuNav activeKey={activeKey} onToggle={onToggleNav} />
      </NavbarWrapper>

      <MenuModalNav $variant={isOpenDelay ? 'open' : 'closed'}>
        <MenuModal className={isOpen ? 'fadeInRight' : 'fadeOutRight'}>
          <Menu activeKey={activeKey} onToggle={onToggleNav} />
          <CloseButton onClick={onToggleNav} bgColor="transparent">
            {/* @ts-ignore */}
            <CloseCircleOutlined />
          </CloseButton>
        </MenuModal>
      </MenuModalNav>
    </NavbarNav>
  );
};

export default Navbar;
