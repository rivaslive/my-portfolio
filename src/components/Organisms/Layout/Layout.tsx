import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import Brand from 'components/Atoms/Brand';
import useScrollPosition from 'hooks/useScrollPosition';
import SocialLinks from 'components/Molecules/SocialLinks';
import { FooterBody, FooterWrapper, LayoutWrapper } from './style';

const Navbar = dynamic(import('components/Organisms/Navbar'));

type LayoutProps = BaseComponent & {
  children?: ReactNode;
};

const Layout = ({ children, ...props }: LayoutProps) => {
  const { detached, loading } = useScrollPosition(5);

  return (
    <LayoutWrapper {...props}>
      <>
        {!loading && <Navbar isScrolling={detached} />}
        {children}

        <div style={{ height: 100 }} />
        <FooterWrapper>
          <FooterBody>
            <Brand />
            <SocialLinks withoutTheme />
          </FooterBody>
        </FooterWrapper>
      </>
    </LayoutWrapper>
  );
};

export default Layout;
