import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Poppins:wght@400;500;700;900&display=swap');

  ${reset}

  body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Noto Sans KR',
      -apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR,
      Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    letter-spacing: -0.3px;
    user-select: none;
    -webkit-user-drag: none;
  }
`;

export default GlobalStyles;
