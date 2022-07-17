import 'styled-components';
import { themeLight } from 'styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof themeLight.colors;
    zIndex: typeof themeLight.zIndex;
  }
}
