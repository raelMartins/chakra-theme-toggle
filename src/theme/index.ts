import { extendTheme } from '@chakra-ui/react';
import { dark_config } from './dark';
import { light_config } from './light';
import { lights_out_config } from './lights_out';
import { dim_config } from './dim';
// import { theme } from './dark';

const theme = {
  colors: {
    primary: '#000000',
    secondary: '#989C94',
    tertiary: '#C21515',
    accent: '#1c1c1c',
    text: '#FFFFFF'
  },
  // styles: {
  //   global: {
  //     // styles for the `body`
  //     body: {
  //       // bg: '#000000',
  //       bg: 'primary',
  //       // color: '#FFFFFF'
  //       color: 'text'
  //     }
  //   }
  // },
  config: {
    initialColorMode: 'light'
  }
};

export const light_theme = extendTheme({ ...theme, ...light_config });
export const dim_theme = extendTheme({ ...theme, ...dim_config });
export const dark_theme = extendTheme({ ...theme, ...dark_config });
export const lights_out_theme = extendTheme({ ...theme, ...lights_out_config });
