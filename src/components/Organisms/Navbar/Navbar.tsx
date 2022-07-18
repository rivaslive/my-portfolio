import { NavbarNav, NavbarWrapper } from './style';
import MenuNav from 'components/Molecules/MenuNav';
import { CloseButton, MenuModal } from 'components/Molecules/MenuNav/style';
import { CloseCircleOutlined } from '@ant-design/icons';
import useModal from 'hooks/useModal';
import { Menu } from 'components/Molecules/MenuNav/MenuNav';

type NavbarProps = BaseComponent & {
  isScrolling?: boolean;
};

const Navbar = ({ isScrolling, ...props }: NavbarProps) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <NavbarNav>
      <NavbarWrapper $isScrolling={isScrolling} {...props}>
        <MenuNav onToggle={toggleModal} />
      </NavbarWrapper>

      <MenuModal $visible={isOpen}>
        <Menu />
        <CloseButton onClick={toggleModal} bgColor="transparent">
          <CloseCircleOutlined />
        </CloseButton>
      </MenuModal>
    </NavbarNav>
  );
};

export default Navbar;
