import { theme } from './variables'

type Colors = typeof theme.darkTheme.colors
type BreakPoints = typeof theme.darkTheme.breakPoints
type FontSizes = typeof theme.darkTheme.fontSizes

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: Colors
    breakPoints: BreakPoints
    fontSizes: FontSizes
  }
}

// import { theme } from './variables'

// type Colors = typeof theme.colors
// type BreakPoints = typeof theme.breakPoints
// type FontSizes = typeof theme.fontSizes
// // type DarkTheme = typeof theme.darkTheme
// // type LightTheme = typeof theme.lightTheme
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     // darkTheme: DarkTheme
//     // lightTheme: LightTheme
//     colors: Colors
//     breakPoints: BreakPoints
//     fontSizes: FontSizes
//   }
// }
