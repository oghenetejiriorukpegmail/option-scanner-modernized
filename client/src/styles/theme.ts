/**
 * Application Theme
 * Centralized theme configuration for consistent styling across the application
 */
export {};

// Breakpoints for responsive design
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px'
};

export const colors = {
  // Primary colors
  primary: '#007bff',
  primaryLight: '#4da3ff',
  primaryDark: '#0056b3',
  
  // Secondary colors
  secondary: '#28a745',
  secondaryLight: '#48c664',
  secondaryDark: '#1e7e34',
  
  // Neutral colors
  background: '#ffffff',
  surface: '#f8f9fa',
  border: '#dee2e6',
  
  // Text colors
  textPrimary: '#212529',
  textSecondary: '#6c757d',
  textLight: '#ffffff',
  
  // Status colors
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8',
  
  // Chart colors
  chartPrimary: '#8884d8',
  chartSecondary: '#82ca9d',
  chartTertiary: '#ff7300',
  chartVolume: '#413ea0',
  
  // Trend colors
  trendUp: '#4caf50',
  trendDown: '#f44336',
  trendNeutral: '#9e9e9e',
  
  // Momentum categories
  veryBullish: '#4caf50',
  bullish: '#8bc34a',
  slightlyBullish: '#cddc39',
  neutral: '#9e9e9e',
  slightlyBearish: '#ff9800',
  bearish: '#f44336',
  veryBearish: '#d32f2f',

  // Dark mode colors (for future implementation)
  darkBackground: '#121212',
  darkSurface: '#1e1e1e',
  darkBorder: '#333333',
  darkTextPrimary: '#e0e0e0',
  darkTextSecondary: '#a0a0a0'
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px'
};

export const typography = {
  fontFamily: 'Arial, sans-serif',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem'
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8
  }
};

export const borders = {
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%'
  },
  width: {
    thin: '1px',
    medium: '2px',
    thick: '4px'
  }
};

export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
};

export const transitions = {
  short: '0.2s ease',
  medium: '0.3s ease',
  long: '0.5s ease'
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};

// Media queries for responsive design
export const media = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  laptop: `@media (min-width: ${breakpoints.laptop})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`
};

// Grid system
export const grid = {
  columns: 12,
  gutter: spacing.md,
  containerWidth: {
    mobile: '100%',
    tablet: '720px',
    laptop: '960px',
    desktop: '1140px'
  }
};

// Animation presets
export const animations = {
  fadeIn: 'fade-in 0.3s ease-in-out',
  slideIn: 'slide-in 0.3s ease-in-out',
  pulse: 'pulse 1.5s infinite'
};

const theme = {
  colors,
  spacing,
  typography,
  borders,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  media,
  grid,
  animations
};

export default theme;