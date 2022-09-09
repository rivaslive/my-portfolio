import { ReactNode } from 'react';

// styles
import { StyleContainer } from './style';

export interface ContainerProps extends BaseComponent {
  children: ReactNode;
  size?: 'small' | 'middle' | 'large';
}

function Container({
  children,
  id,
  style,
  className,
  size = 'small',
  ...rest
}: ContainerProps) {
  return (
    <StyleContainer id={id} className={className} style={style} $size={size} {...rest}>
      {children}
    </StyleContainer>
  );
}

export default Container;
