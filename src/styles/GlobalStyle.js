import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: ${props => props.theme.bg};
    --gray-1: ${props => props.theme.gray1};
    --deep-dark: ${props => props.theme.deepDark};
    --gray-2: ${props => props.theme.gray2};
    --white: ${props => props.theme.white};
    --black: ${props => props.theme.black};
  }
  html{
    font-size: 8px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .smooth-scroll-container {
    height: 100vh;
    z-index: 1;
    overflow-y: scroll;
    scroll-behavior: smooth;
    background-color: var(--dark-bg);
    
    
    /* Custom scrollbar styles */
    &::-webkit-scrollbar {
        width: 8px;
        @media only screen and (max-width: 768px) {
          width: 3px; 
          
        }
    }
    
    &::-webkit-scrollbar-track {
        background: var(--deep-dark);
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--gray-1);
        border-radius: 4px;
    }

    
  }


`;
export default GlobalStyles;
