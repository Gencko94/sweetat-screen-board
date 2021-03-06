export const lightTheme: any = {
  background: "hsl(255,25%,95%)",
  shadow: "0px 4px 7px 2px rgb(213,213,213)",
  errorShadow: "0px 0px 10px 0px #b72b2b",
  green: "#0B9B23",
  dangerRed: "#b72b2b",
  border: "1px solid rgba(0,0,0,0.1)",
  borderHovered: "rgba(0,0,0,0.3)",

  // New Color
  text: "#252525",
  textContrast: "#fff",
  textAlt: "#737373",
  textAltContrast: "#fbfbfb",
  // New Accents
  accent1: "#fafafa",
  accent2: "#f1f1f1",
  accent3: "#eaeaea",
  blue: "#2e87fc",
};
lightTheme.subtleFloating = "hsl(0, 0%, 100%)";
lightTheme.subtleBackground = "hsl(0, 4%, 99%)";

export const darkTheme: any = {
  background: "hsl(210,30%,8%)",

  shadow: "none",
  errorShadow: "0px 0px 10px 0px #b72b2b",
  green: "#1AD439",
  dangerRed: "hsl(0, 100%, 69.6%)",
  border: "1px solid #D8D8D8",
  borderHovered: "rgba(255,255,255,0.7)",
  // New Color
  text: "#fff",
  textContrast: "#252525",
  textAlt: "#ececec",
  textAltContrast: "#fbfbfb",
  // New Accents
  accent1: "#111",
  accent2: "#222",
  accent3: "#333",
  blue: "#2e87fc",
};

darkTheme.subtleBackground = "hsl(210, 22%, 25%)";

darkTheme.subtleFloating = "hsl(210, 22%, 15%)";

export const up = (breakpoint: string) => `@media (min-width: ${breakpoint})`;
export const down = (breakpoint: string) => `@media (max-width: ${breakpoint})`;
