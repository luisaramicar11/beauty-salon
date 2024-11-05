import 'styled-components';

interface IColors {
  bgGradient: string;
  bgWhite: string;
  bgInactiveTabs: string;
  bgPaginationButtons: string;
  textBlack: string;
  textMediumGray: string;
  textLightGray: string;
  textWhite: string;
  buttonPurple: string;
  buttonPurpleHover: string;
  buttonPink: string;
  buttonPinkHover: string;
  buttonRedText: string;
  buttonRedTextHover: string;
  buttonRedBgHover: string;
  buttonFocusPurple: string;
  buttonFocusPink: string;
  borderGray: string;
}

interface IGlobalTheme {
  colors: IColors;
}

declare module 'styled-components' {
    export interface DefaultTheme extends IGlobalTheme {
      colors: IColors; 
    }
  }