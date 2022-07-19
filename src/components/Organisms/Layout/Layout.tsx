import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import useScrollPosition from 'hooks/useScrollPosition';
import { LayoutWrapper } from './style';

const Navbar = dynamic(import('components/Organisms/Navbar'));

type LayoutProps = BaseComponent & {
  children?: ReactNode;
};

const Layout = ({ children, ...props }: LayoutProps) => {
  const { detached, loading } = useScrollPosition(5);

  return (
    <LayoutWrapper {...props}>
      {!loading && <Navbar isScrolling={detached} />}
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
