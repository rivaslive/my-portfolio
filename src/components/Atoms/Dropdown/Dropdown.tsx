import { ReactNode, useRef, MouseEvent, cloneElement } from 'react';

import useModal from 'hooks/useModal';
import useClickOutside from 'hooks/useClickOutside';

import Menu from './Menu';
import Item from './Item';
import {
  StyleButtonDiv,
  StyleDrop,
  StyleMenu,
  StyleMenuWrapper
} from './style';
import Button from 'components/Atoms/Button';

type DropdownProps = BaseComponent & {
  menu: ReactNode;
  children: ReactNode;
  value?: string;
  onChange?: (value: any) => void;
};

const Dropdown = ({
  children,
  menu,
  onChange,
  value,
  ...rest
}: DropdownProps) => {
  const ref = useRef(null);
  const { isOpen, toggleModal, closeModal } = useModal();

  const onToggleDropdown = (e: MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    e?.preventDefault();
    toggleModal();
  };

  useClickOutside(ref, closeModal);

  return (
    <StyleDrop {...rest}>
      <StyleButtonDiv onClick={onToggleDropdown}>
        <Button
          color="text"
          bgColor="input"
          fontWeight="normal"
          style={{ width: '100%' }}
        >
          {value ?? children}
        </Button>
      </StyleButtonDiv>
      <StyleMenuWrapper ref={ref} style={!isOpen ? { display: 'none' } : {}}>
        <StyleMenu>
          {cloneElement(menu as JSX.Element, {
            onToggle: toggleModal,
            onChange
          })}
        </StyleMenu>
      </StyleMenuWrapper>
    </StyleDrop>
  );
};

Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
