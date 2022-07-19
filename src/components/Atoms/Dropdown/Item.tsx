import { ReactNode } from 'react';
import { StyleIcon, StyleMenuItem } from './style';

export type MenuItemType = BaseComponent & {
  children: ReactNode;
  id?: string | number;
  key: string | number;
  icon?: ReactNode;
  onToggle?: () => void;
  onClick?: (props: { key: string | number; children?: ReactNode }) => void;
};

const Item = ({
  children,
  icon,
  onClick,
  id,
  onToggle,
  ...rest
}: MenuItemType) => {
  const clickMenu = () => {
    onClick && onClick({ key: id as string, children });
    onToggle && onToggle();
  };

  return (
    <StyleMenuItem onClick={clickMenu} {...rest}>
      {icon && <StyleIcon>{icon}</StyleIcon>}
      {children}
    </StyleMenuItem>
  );
};

export default Item;
