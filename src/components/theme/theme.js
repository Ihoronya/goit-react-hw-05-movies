const { extendTheme } = require('@chakra-ui/react');

const colors = {
  brand: {
    100: '#5664d1',
    200: '#7b2e8f',
    300: '#ac60bf',
    400: '#FFE4C4',
    500: '#dd0939',
  },
};

export const theme = extendTheme({ colors });