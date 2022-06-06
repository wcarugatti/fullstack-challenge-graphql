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

  .MuiAutocomplete-noOptions{
    display: none;
  }

  :root {
    --dark-purple: #2b1337;
    --light-gray: #f7f7f7;
    --soft-black: rgba(0, 0, 0, 0.87);
    --primary: #621ccb;
  }

`;
