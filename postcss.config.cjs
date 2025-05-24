const breakpointValues = {
  xs: '36em', 
  sm: '48em', 
  md: '64em',
  lg: '75em', 
  xl: '87.5em', 
  xxl: '100em', 
};


module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': breakpointValues.xs,
        'mantine-breakpoint-sm': breakpointValues.sm,
        'mantine-breakpoint-md': breakpointValues.md,
        'mantine-breakpoint-lg': breakpointValues.lg,
        'mantine-breakpoint-xl': breakpointValues.xl,
        'mantine-breakpoint-xxl': breakpointValues.xxl,
      },
    },
  },
};
