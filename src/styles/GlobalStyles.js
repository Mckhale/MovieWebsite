import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Modern, clean font */
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
    line-height: 1.5; /* Better readability */
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease; /* Smooth transitions */
  }

  /* Custom scrollbar with modern styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #111;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #8a2be2, #6a1b9a);
    border-radius: 10px;
    &:hover {
      background: #8a2be2;
    }
  }

  /* Subtle selection highlight */
  ::selection {
    background: rgba(138, 43, 226, 0.3);
    color: #fff;
  }
`;

export default GlobalStyles;