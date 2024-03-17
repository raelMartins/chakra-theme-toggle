import { dark_theme, dim_theme, light_theme, lights_out_theme } from '@/theme';
import { createContext } from 'react';

const themes = {
  light: light_theme,
  dim: dim_theme,
  dark: dark_theme,
  lights_out: lights_out_theme,
  default: light_theme
};

export const MyThemeContext = createContext({
  changeTheme: (el: keyof typeof themes) => {}
});

export default function MyThemeContextProvider({
  currentTheme,
  setCurrentTheme,
  children
}: any) {
  const changeTheme = (my_theme: keyof typeof themes) => {
    console.log('Current Theme: ', currentTheme);
    console.log(Array.from(Object.keys(themes)));
    console.log(my_theme);
    if (my_theme && Array.from(Object.keys(themes)).includes(my_theme)) {
      //ts-ignore
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
