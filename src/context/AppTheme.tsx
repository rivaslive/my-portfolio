import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import storage from 'utils/storage';

type ModeType = 'light' | 'dark';

type AppThemeContextType = {
  theme: ModeType;
  themeToggle: () => void;
};

const AppThemeContext = createContext<AppThemeContextType>({
  theme: 'light',
  themeToggle: () => {},
});

const KEY_THEME_NAME = 'theme';

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ModeType>('dark');

  const setMode = useCallback((mode: ModeType) => {
    storage.setItem(KEY_THEME_NAME, mode);
    setTheme(mode);
  }, []);

  const themeToggle = useCallback(() => {
    setMode(theme === 'light' ? 'dark' : 'light');
  }, [theme, setMode]);

  useEffect(() => {
    const deviceTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = storage.getItem<ModeType>(KEY_THEME_NAME);
    if (localTheme) {
      setMode(localTheme);
    } else {
      setMode(deviceTheme ? 'dark' : 'light');
    }
  }, [setMode]);

  const out = useMemo(() => {
    return {
      theme,
      themeToggle,
    };
  }, [theme, themeToggle]);

  return (
    <AppThemeContext.Provider value={out}>{children}</AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
