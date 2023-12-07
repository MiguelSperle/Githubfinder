import { theme } from './Variables'

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
