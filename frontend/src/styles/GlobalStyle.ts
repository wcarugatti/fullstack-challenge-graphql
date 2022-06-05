import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  

  :root {
    --dark-purple: #2b1337;
    --light-gray: #f7f7f7;
    --primary: #621ccb;
  }

`;
