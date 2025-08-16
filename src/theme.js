import { createSystem, defaultConfig } from '@chakra-ui/react';

const myCustomTheme = {
  tokens: {
    fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
  },
};

export const system = createSystem(defaultConfig, { theme: myCustomTheme });