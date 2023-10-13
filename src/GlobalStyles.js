import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    
    @font-face {
      font-family: "Noto Sans KR";
      src: url("./assets/fonts/Noto_Sans_KR/NotoSansKR-VariableFont_wght.ttf");
    }
    
    html {
      font-size: 62.5%;
    }

    body {
      font-family: "Noto Sans KR", Arial, sans-serif;
      box-sizing: border-box;
    }

    a{
      text-decoration: none;
      color: inherit;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
`;

export default GlobalStyles;
