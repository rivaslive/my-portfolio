const colorsLight = {
  primary: '#127dff',
  secondary: '#ff9800',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  background: '#ffffff',
  bgCard: 'rgba(100, 100, 200, .2)',
  text: '#000000',
  secondaryText: '#404040',
  nav: 'rgba(255, 255, 255, 0.8)',
  modal: 'rgba(0, 0, 0, 0.1)',
  bgModal: 'white',
  input: '#F5F5F5',
  borderColor: '#F5F5F5',
  shadowInput: 'rgb(224, 224, 224)',
  icon: '#BBBBBB',
  primaryOpacity: '#075dc0',
  accentOpacity: '#5b2464',
  primaryGradient: 'linear-gradient(to right, #1e40af, #00a2ff)',
  accentGradient: 'linear-gradient(to right, #762f82, #da00ff)'
};

const colorsDark = {
  ...colorsLight,
  background: '#0F0F1A',
  text: '#ffffff',
  secondaryText: '#bfc0c0',
  bgCard: 'rgba(100, 100, 200, 0.3)',
  nav: 'rgba(0, 0, 0, .5)',
  bgModal: '#161616',
  input: '#161616',
  borderColor: '#313538',
  shadowInput: 'rgb(77, 77, 77)'
};

export type ColorType = keyof typeof colorsLight;

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30
};

export const themeLight = {
  colors: colorsLight,
  zIndex
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark
};

export const mediaQueries = {
  mobile: '@media (min-width: 768px)',
  tablet: '@media (min-width: 992px)',
  desktop: '@media (min-width: 1200px)'
};
