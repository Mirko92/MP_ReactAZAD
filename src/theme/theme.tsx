import { ThemeProvider, PartialTheme } from '@fluentui/react';

const appTheme: PartialTheme = {
  palette: {
    themePrimary: 'black',
  }
};


export function MyThemeProvider({children}: any) {
  return <ThemeProvider theme={appTheme}>
    {children}
  </ThemeProvider>
}