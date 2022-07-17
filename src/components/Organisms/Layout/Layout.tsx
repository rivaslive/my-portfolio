import { LayoutWrapper } from 'components/Organisms/Layout/style';
import { ReactNode } from 'react';
import Navbar from 'components/Organisms/Navbar';
import useScrollPosition from 'hooks/useScrollPosition';

type LayoutProps = BaseComponent & {
  children?: ReactNode;
};

const Layout = ({ children, ...props }: LayoutProps) => {
  const { detached } = useScrollPosition(5);

  return (
    <LayoutWrapper {...props}>
      <Navbar isScrolling={detached} />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
