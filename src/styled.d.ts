// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface CustomTheme {
    colors: {
      light: string;
      dark: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xl: string;
      xxl: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
  }
}
