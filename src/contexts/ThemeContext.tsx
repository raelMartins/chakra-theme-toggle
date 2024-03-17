import { dark_theme, dim_theme, light_theme, lights_out_theme } from '@/theme';
import { createContext } from 'react';

export const MyThemeContext = createContext({
  changeTheme: (el: string) => {}
});

export default function MyThemeContextProvider({
  currentTheme,
  setCurrentTheme,
  children
}: any) {
  const themes = {
    light: light_theme,
    dim: dim_theme,
    dark: dark_theme,
    lights_out: lights_out_theme,
    default: light_theme
  };

  const changeTheme = (my_theme: string) => {
    console.log('Current Theme: ', currentTheme);
    console.log(Array.from(Object.keys(themes)));
    console.log(my_theme);
    if (Array.from(Object.keys(themes)).includes(my_theme)) {
      console.log('NEW THEME: ', themes[`${my_theme}`]);
      setCurrentTheme(themes[`${my_theme}`]);
    } else {
      setCurrentTheme(light_theme);
    }
    // if()
    // setCurrentTheme(themes[`${my_theme}`]);
  };

  return (
    <MyThemeContext.Provider value={{ changeTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
}
