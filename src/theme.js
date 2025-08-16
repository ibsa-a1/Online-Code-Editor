import { createSystem, defaultConfig } from '@chakra-ui/react';

const myCustomConfig = {
  theme: {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
  },
};

export const system = createSystem(defaultConfig, myCustomConfig);