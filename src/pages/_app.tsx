import 'styles/grid.css';
import { memo, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import { themeDark, themeLight } from 'styles/theme';
import { useAppTheme, AppThemeProvider } from 'context/AppTheme';

const AppRenderTheme = memo(({ children }: { children?: ReactNode }) => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
});

AppRenderTheme.displayName = 'AppRenderTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <AppRenderTheme>
        <Component {...pageProps} />
      </AppRenderTheme>
    </AppThemeProvider>
  );
}

export default MyApp;
