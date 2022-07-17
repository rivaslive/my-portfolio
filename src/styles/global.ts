import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji",
    sans-serif;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    tab-size: 4;
    font-size: 14px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  p, div, button, section, h1, h2, h3, h4, h5, h6, a {
    font-size: 1em;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: currentColor;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  a {
    text-decoration: none;
  }

  .ReactModal__Overlay {
    z-index: ${({ theme }) => theme.zIndex.modal};
    background: ${({ theme }) => theme.colors.modal} !important;

    .ReactModal__Content {
      border: none !important;
      background: ${({ theme }) => theme.colors.bgModal} !important;
      color: ${({ theme }) => theme.colors.text} !important;
    }
  }
`;

export default GlobalStyle;
