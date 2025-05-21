import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Color system */
    --color-primary-50: #e6f1fe;
    --color-primary-100: #cce3fd;
    --color-primary-200: #99c7fb;
    --color-primary-300: #66abf9;
    --color-primary-400: #338ef7;
    --color-primary-500: #0070f3;
    --color-primary-600: #005ac2;
    --color-primary-700: #004391;
    --color-primary-800: #002d61;
    --color-primary-900: #001630;
    
    --color-secondary-50: #ecfdf5;
    --color-secondary-100: #d1fae5;
    --color-secondary-200: #a7f3d0;
    --color-secondary-300: #6ee7b7;
    --color-secondary-400: #34d399;
    --color-secondary-500: #10b981;
    --color-secondary-600: #059669;
    --color-secondary-700: #047857;
    --color-secondary-800: #065f46;
    --color-secondary-900: #064e3b;
    
    --color-accent-50: #f5f3ff;
    --color-accent-100: #ede9fe;
    --color-accent-200: #ddd6fe;
    --color-accent-300: #c4b5fd;
    --color-accent-400: #a78bfa;
    --color-accent-500: #8b5cf6;
    --color-accent-600: #7c3aed;
    --color-accent-700: #6d28d9;
    --color-accent-800: #5b21b6;
    --color-accent-900: #4c1d95;
    
    --color-success-50: #ecfdf5;
    --color-success-500: #10b981;
    --color-success-700: #047857;
    
    --color-warning-50: #fffbeb;
    --color-warning-500: #f59e0b;
    --color-warning-700: #b45309;
    
    --color-error-50: #fef2f2;
    --color-error-500: #ef4444;
    --color-error-700: #b91c1c;
    
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;
    
    /* Spacing system (8px) */
    --space-1: 0.25rem; /* 4px */
    --space-2: 0.5rem;  /* 8px */
    --space-3: 0.75rem; /* 12px */
    --space-4: 1rem;    /* 16px */
    --space-5: 1.25rem; /* 20px */
    --space-6: 1.5rem;  /* 24px */
    --space-8: 2rem;    /* 32px */
    --space-10: 2.5rem; /* 40px */
    --space-12: 3rem;   /* 48px */
    --space-16: 4rem;   /* 64px */
    --space-20: 5rem;   /* 80px */
    
    /* Font */
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
                 Helvetica, Arial, sans-serif, "Apple Color Emoji", 
                 "Segoe UI Emoji", "Segoe UI Symbol";
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Border radius */
    --radius-sm: 0.125rem; /* 2px */
    --radius: 0.25rem;     /* 4px */
    --radius-md: 0.375rem; /* 6px */
    --radius-lg: 0.5rem;   /* 8px */
    --radius-xl: 0.75rem;  /* 12px */
    --radius-2xl: 1rem;    /* 16px */
    --radius-3xl: 1.5rem;  /* 24px */
    --radius-full: 9999px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: var(--font-sans);
    font-size: 16px;
    line-height: 1.5;
    background-color: var(--color-gray-50);
    color: var(--color-gray-900);
  }

  body {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.25rem;
    margin-bottom: var(--space-6);
  }

  h2 {
    font-size: 1.875rem;
    margin-bottom: var(--space-5);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--space-4);
  }

  p {
    margin-bottom: var(--space-4);
  }

  a {
    color: var(--color-primary-500);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
  }

  /* Light/Dark mode transition */
  * {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-gray-50: #111827;
      --color-gray-100: #1f2937;
      --color-gray-200: #374151;
      --color-gray-300: #4b5563;
      --color-gray-400: #6b7280;
      --color-gray-500: #9ca3af;
      --color-gray-600: #d1d5db;
      --color-gray-700: #e5e7eb;
      --color-gray-800: #f3f4f6;
      --color-gray-900: #f9fafb;
    }
    
    body {
      background-color: var(--color-gray-50);
      color: var(--color-gray-900);
    }
  }
`;

export default GlobalStyle;