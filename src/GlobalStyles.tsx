import { createGlobalStyle } from 'styled-components';
import 'normalize.css/normalize.css';

const GlobalStyles = createGlobalStyle`
 
 :root {
    --background: white;
    --text: black;
    --font-sans-serif: 'Inter', sans-serif; 
    --font-serif: 'Playfair Display', serif;
    --screen-lg: 1024px;
    --screen-sm: 480px;

    --text-post-body: #333333;
    --text-dimmed: #666666;
    --input-border: #E6E6E6;
  
  }

  *, *::before, *::after {
    box-sizing: border-box
  }

  #__next {
    height: 100vh;
    font-size: 16px;
    font-family: var(--font-sans-serif);
    background: var(---background);
    color: var(--text);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
    margin: 0;
  }

  .wrapper {
    padding: 32px 40px;
  }

  @media (max-width: 770px) {
    .wrapper {
      padding: 32px 20px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      padding: 0;
    }
  }
  
`;

export default GlobalStyles;
