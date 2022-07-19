import { Children, cloneElement, ReactNode, useMemo } from 'react';
import { StyleMenu } from './style';

export type MenuType = BaseComponent & {
  children: ReactNode;
  onToggle?: () => void;
  onChange?: (value: any) => void;
  onClick?: (props: { key: string | number; children?: ReactNode }) => void;
};

const Menu = ({ children, onToggle, onClick, onChange, ...rest }: MenuType) => {
  // @ts-ignore
  const menuChildren: any[] = useMemo(() => {
    if (Children.count(children)) {
      return children;
    }

    return [children];
  }, [children]);

  const onHandleMenu = (props: {
    key: string | number;
    children?: ReactNode;
  }) => {
    onClick && onClick(props);
    onChange && onChange(props.key);
  };

  return (
    <StyleMenu {...rest}>
      {menuChildren?.map((child) => {
        return cloneElement(child as JSX.Element, {
          id: child?.key,
          onToggle,
          onClick: onHandleMenu
        });
      })}
    </StyleMenu>
  );
};

export default Menu;
