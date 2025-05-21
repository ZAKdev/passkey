import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';

const theme = {
  colors: {
    primary: {
      50: 'var(--color-primary-50)',
      100: 'var(--color-primary-100)',
      200: 'var(--color-primary-200)',
      300: 'var(--color-primary-300)',
      400: 'var(--color-primary-400)',
      500: 'var(--color-primary-500)',
      600: 'var(--color-primary-600)',
      700: 'var(--color-primary-700)',
      800: 'var(--color-primary-800)',
      900: 'var(--color-primary-900)',
    },
    secondary: {
      50: 'var(--color-secondary-50)',
      100: 'var(--color-secondary-100)',
      200: 'var(--color-secondary-200)',
      300: 'var(--color-secondary-300)',
      400: 'var(--color-secondary-400)',
      500: 'var(--color-secondary-500)',
      600: 'var(--color-secondary-600)',
      700: 'var(--color-secondary-700)',
      800: 'var(--color-secondary-800)',
      900: 'var(--color-secondary-900)',
    },
    accent: {
      50: 'var(--color-accent-50)',
      100: 'var(--color-accent-100)',
      200: 'var(--color-accent-200)',
      300: 'var(--color-accent-300)',
      400: 'var(--color-accent-400)',
      500: 'var(--color-accent-500)',
      600: 'var(--color-accent-600)',
      700: 'var(--color-accent-700)',
      800: 'var(--color-accent-800)',
      900: 'var(--color-accent-900)',
    },
    success: {
      50: 'var(--color-success-50)',
      500: 'var(--color-success-500)',
      700: 'var(--color-success-700)',
    },
    warning: {
      50: 'var(--color-warning-50)',
      500: 'var(--color-warning-500)',
      700: 'var(--color-warning-700)',
    },
    error: {
      50: 'var(--color-error-50)',
      500: 'var(--color-error-500)',
      700: 'var(--color-error-700)',
    },
    gray: {
      50: 'var(--color-gray-50)',
      100: 'var(--color-gray-100)',
      200: 'var(--color-gray-200)',
      300: 'var(--color-gray-300)',
      400: 'var(--color-gray-400)',
      500: 'var(--color-gray-500)',
      600: 'var(--color-gray-600)',
      700: 'var(--color-gray-700)',
      800: 'var(--color-gray-800)',
      900: 'var(--color-gray-900)',
    },
  },
  space: {
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    10: 'var(--space-10)',
    12: 'var(--space-12)',
    16: 'var(--space-16)',
    20: 'var(--space-20)',
  },
  fonts: {
    sans: 'var(--font-sans)',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  shadows: {
    sm: 'var(--shadow-sm)',
    base: 'var(--shadow)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
  },
  radii: {
    sm: 'var(--radius-sm)',
    base: 'var(--radius)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    '3xl': 'var(--radius-3xl)',
    full: 'var(--radius-full)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;