import * as CSSTypes from './types/css';

declare global {
  export import CSSValueType = CSSTypes.CSSValueType;

  export type DDD = 1;
}

// eslint-disable-next-line unicorn/require-module-specifiers
export {};
