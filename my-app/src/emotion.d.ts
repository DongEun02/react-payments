import '@emotion/react';
import type { Theme } from './styles/theme';

declare module '@emotion/react' {
  export interface Theme extends Theme {}
}
