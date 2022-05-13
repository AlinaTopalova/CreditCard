import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #112531;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`
const Wrap = styled.div`
  display: flex;
  padding: 100px 60px;
  margin: 0 auto;
`

export {
  Wrap,
  GlobalStyle 
};