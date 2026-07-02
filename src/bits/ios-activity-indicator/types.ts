export interface Props {
  /**
   * @defaultValue "tint"
   */
  mode?: 'tint' | 'accent' | undefined;

  /**
   * @defaultValue 8
   */
  leafs?: number | undefined;

  /**
   * CSS [`<color>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value)
   *
   * @defaultValue "currentColor"
   */
  color?: CSSValueType.Color | undefined;

  /**
   * CSS [`<time>`](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/time)
   *
   * @defaultValue '0'
   */
  delay?: CSSValueType.Time | undefined;
}
