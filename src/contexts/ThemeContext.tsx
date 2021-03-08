import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider as StyledThemes } from 'styled-components';
import { darkTheme, lightTheme } from '../utils/themes';
export type ThemeMode = 'light' | 'dark' | string;
type ContextProps = {
  toggleTheme: () => void;
  mode: ThemeMode;
};

export const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const { i18n } = useTranslation();
  const fontFamily = useMemo(
    () => (i18n.language === 'ar' ? 'Cairo' : 'Nunito'),
    [i18n.language]
  );
  const currentTheme = useMemo(() => {
    if (mode === 'light') return { fontFamily, ...lightTheme };
    return { fontFamily, ...darkTheme };
  }, [mode, fontFamily]);

  const toggleTheme = useCallback(() => {
    if (mode === 'light') {
      setMode('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setMode('light');
      window.localStorage.setItem('theme', 'light');
    }
  }, [mode]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setMode(localTheme);
  }, []);
  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <StyledThemes theme={currentTheme}>
        <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
      </StyledThemes>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
