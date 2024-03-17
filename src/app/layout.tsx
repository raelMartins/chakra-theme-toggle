'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChakraProvider, extendBaseTheme, extendTheme } from '@chakra-ui/react';
import './globals.scss';
import { dark_theme, dim_theme, light_theme, lights_out_theme } from '@/theme';
import MyThemeContextProvider from '@/contexts/ThemeContext';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Multiple Theme Test',
//   description: 'Using this to test toggling between multiple themes'
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentTheme, setCurrentTheme] = useState(light_theme);

  return (
    <html lang='en'>
      <body className={inter.className}>
        <MyThemeContextProvider
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          <ChakraProvider theme={currentTheme}>{children}</ChakraProvider>
        </MyThemeContextProvider>
      </body>
    </html>
  );
}
