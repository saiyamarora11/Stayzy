import { createTheme } from '@mantine/core';
import { Breakpoints } from './app/types/breakpoints';

const breakpointValues: Breakpoints = {
  xs: '36em', // 576px - Mobile phones (large)
  sm: '48em', // 768px - Tablets (portrait)
  md: '64em', // 1024px - Tablets (landscape)
  lg: '75em', // 1200px - Desktop
  xl: '87.5em', // 1400px - Large desktop
  xxl: '100em', // 1600px - Extra large screens
};

export const theme = createTheme({
  breakpoints: {
    xs: breakpointValues.xs,
    sm: breakpointValues.sm,
    md: breakpointValues.md,
    lg: breakpointValues.lg,
    xl: breakpointValues.xl,
    xxl: breakpointValues.xxl,
  },
  fontFamily: 'Inter, sans-serif',
});
