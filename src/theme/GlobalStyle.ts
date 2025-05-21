import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* GMX Color system */
    --color-primary-50: #e8f4ff;
    --color-primary-100: #d1e9ff;
    --color-primary-200: #a3d3ff;
    --color-primary-300: #75bdff;
    --color-primary-400: #47a7ff;
    --color-primary-500: #1991ff;
    --color-primary-600: #0073e6;
    --color-primary-700: #0057b3;
    --color-primary-800: #003b80;
    --color-primary-900: #001f4d;
    
    --color-secondary-50: #f5f6f7;
    --color-secondary-100: #e6e9ec;
    --color-secondary-200: #ccd3d9;
    --color-secondary-300: #b3bdc6;
    --color-secondary-400: #99a7b3;
    --color-secondary-500: #8091a0;
    --color-secondary-600: #667b8c;
    --color-secondary-700: #4d6579;
    --color-secondary-800: #334f66;
    --color-secondary-900: #1a3953;
    
    --color-accent-50: #fff8e6;
    --color-accent-100: #fff1cc;
    --color-accent-200: #ffe499;
    --color-accent-300: #ffd666;
    --color-accent-400: #ffc933;
    --color-accent-500: #ffbb00;
    --color-accent-600: #cc9600;
    --color-accent-700: #997000;
    --color-accent-800: #664b00;
    --color-accent-900: #332500;
    
    --color-success-50: #e6f7ed;
    --color-success-500: #00b347;
    --color-success-700: #008435;
    
    --color-warning-50: #fff3e6;
    --color-warning-500: #ff9500;
    --color-warning-700: #cc7600;
    
    --color-error-50: #ffeaea;
    --color-error-500: #ff0000;
    --color-error-700: #cc0000;
    
    --color-gray-50: #f5f6f7;
    --color-gray-100: #e6e9ec;
    --color-gray-200: #ccd3d9;
    --color-gray-300: #b3bdc6;
    --color-gray-400: #99a7b3;
    --color-gray-500: #8091a0;
    --color-gray-600: #667b8c;
    --color-gray-700: #4d6579;
    --color-gray-800: #334f66;
    --color-gray-900: #1a3953;
    
    /* GMX Font */
    --font-sans: "GMX", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                 Helvetica, Arial, sans-serif;
    
    /* GMX Font Sizes */
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */
    --font-size-4xl: 2.25rem;   /* 36px */
    
    /* GMX Spacing */
    --space-1: 0.25rem;  /* 4px */
    --space-2: 0.5rem;   /* 8px */
    --space-3: 0.75rem;  /* 12px */
    --space-4: 1rem;     /* 16px */
    --space-5: 1.25rem;  /* 20px */
    --space-6: 1.5rem;   /* 24px */
    --space-8: 2rem;     /* 32px */
    --space-10: 2.5rem;  /* 40px */
    --space-12: 3rem;    /* 48px */
    
    /* GMX Border Radius */
    --radius-sm: 0.125rem;
    --radius: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-full: 9999px;
    
    /* GMX Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: var(--font-sans);
    font-size: var(--font-size-base);
    line-height: 1.5;
    background-color: #f3f3f3;
    color: var(--color-gray-900);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    line-height: 1.2;
  }

  h3 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    line-height: 1.2;
  }

  h4 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    margin-bottom: var(--space-4);
  }

  a {
    color: #6e9804;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      color: #587a03;
      text-decoration: none;
    }
  }

  button {
    font-family: var(--font-sans);
    cursor: pointer;
  }
`;

export default GlobalStyle;