// import original module declarations
import "styled-components";
import { Devices } from "./breakpoints";

// and extend them!
type FontWeights = {
  light: string;
  regular: string;
  semibold: string;
  bold: string;
  xbold: string;
};
declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    breakpoints: Devices;
    background: string;
    subtleBackground: string;
    subtleFloating: string;
    shadow: string;
    errorShadow: string;

    green: string;
    font: FontWeights;
    dangerRed: string;
    border: string;
    borderDanger: string;
    maxWidthMd: string;
    maxWidthLg: string;
    maxWidthXl: string;
    borderHovered: string;
    // New Colors
    primary: string;
    secondary: string;
    text: string;
    textContrast: string;
    textAlt: string;
    textAltContrast: string;
    blue: string;
    yellow: string;

    // New Accents
    accent1: string;
    accent2: string;
    accent3: string;
  }
}
