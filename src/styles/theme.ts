const colorsLight = {
  primary: '#127dff',
  secondary: '#ff9800',
  accent: '#9c27b0',
  error: '#f44336',
  npm: '#C43534',
  // npm2: '#9c4746',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  background: '#ffffff',
  bgCard: 'linear-gradient(177.94deg, #FFFFFF 1.73%, #E9EBF8 76.75%)',
  text: '#000000',
  secondaryText: '#404040',
  nav: 'rgba(255, 255, 255, 0.7)',
  modal: 'rgba(0, 0, 0, 0.1)',
  bgModal: 'white',
  input: '#F5F5F5',
  borderColor: '#b5b5b5',
  shadowInput: 'rgb(178,178,178)',
  icon: '#BBBBBB',
  primaryOpacity: '#075dc0',
  accentOpacity: '#5b2464',
  primaryGradient: 'linear-gradient(to right, #1e40af, #00a2ff)',
  npmGradient: 'linear-gradient(to right, #9c4746, #C43534)',
  accentGradient: 'linear-gradient(to right, #762f82, #da00ff)'
};

const colorsDark = {
  ...colorsLight,
  background: '#0F0F1A',
  text: '#ffffff',
  secondaryText: '#bfc0c0',
  bgCard:
    'linear-gradient(180deg, rgba(35, 37, 49, 0.5), rgba(15, 15, 24, 0.5))',
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
