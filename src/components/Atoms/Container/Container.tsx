import { ReactNode } from 'react';

// styles
import { StyleContainer } from './style';

export interface ContainerProps extends BaseComponent {
  children: ReactNode;
}

function Container({
  children,
  id,
  style,
  className,
  ...rest
}: ContainerProps) {
  return (
    <StyleContainer id={id} className={className} style={style} {...rest}>
      {children}
    </StyleContainer>
  );
}

export default Container;
