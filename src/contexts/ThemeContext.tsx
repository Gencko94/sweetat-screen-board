import React, { createContext, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { ThemeProvider as StyledThemes } from "styled-components";

import { getInitialColorMode } from "../helpers/getInitialColorMode";
import { darkTheme, lightTheme } from "../constants";
import { devices } from "../breakpoints";
export type ThemeMode = "light" | "dark";

type ContextProps = {
  toggleTheme: () => void;
  colorMode: ThemeMode;
  currentTheme: any;
};

export const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ThemeMode>(getInitialColorMode());
  const { i18n } = useTranslation();

  const fontFamily = useMemo(
    // () => (i18n.language === "ar" ? "Cairo" : "Noto Sans JP"),
    // () => (i18n.language === "ar" ? "Cairo" : "apple-System"),
    () =>
      i18n.language === "ar"
        ? "Cairo"
        : "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    [i18n.language]
  );

  const currentTheme = useMemo(() => {
    const theme =
      colorMode === "light"
        ? {
            ...lightTheme,
            primary: "hsl(336deg 95% 62%)",
            secondary: "hsl(248, 54%, 49%)",
          }
        : {
            ...darkTheme,
            primary: "hsl(336deg 95% 62%)",
            secondary: "hsla(222, 100%, 58%, 1)",
          };
    return {
      fontFamily,
      breakpoints: devices,
      maxWidthMd: "960px",
      maxWidthLg: "1260px",
      yellow: "#f5a623",
      borderDanger: "1px solid #e23e3eac",

      font: {
        light: "300",
        regular: "400",
        semibold: "500",
        bold: "700",
        xbold: "900",
      },
      ...theme,
    };
  }, [colorMode, fontFamily]);

  const toggleTheme = useCallback(() => {
    if (colorMode === "light") {
      setColorMode("dark");
      localStorage.setItem("sweetat-panel-color-mode", "dark");
    } else {
      setColorMode("light");
      localStorage.setItem("sweetat-panel-color-mode", "light");
    }
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, colorMode, currentTheme }}>
      <StyledThemes theme={currentTheme}>
        <Container lang={i18n.language}>{children}</Container>
      </StyledThemes>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
const Container = styled.div<{ lang: string }>`
  font-family: ${(props) => props.theme.fontFamily};
  direction: ${(props) => (props.lang === "ar" ? "rtl" : "ltr")};
`;
