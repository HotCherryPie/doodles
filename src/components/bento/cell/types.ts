export interface Props {
  /**
   * @defaultValue 1
   */
  w?: number | undefined;

  /**
   * @defaultValue 1
   */
  h?: number | undefined;

  /**
   * @defaultValue 'auto'
   */
  x?: number | 'auto' | undefined;

  /**
   * @defaultValue 'auto'
   */
  y?: number | 'auto' | undefined;

  /**
   * @defaultValue false
   */
  cover?: boolean | undefined;

  /**
   * @defaultValue false
   */
  subgrid?: boolean | undefined;
}
