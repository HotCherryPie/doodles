export interface Props {
  /**
   * @defaultValue 1
   */
  w?: number | `${number}` | undefined;

  /**
   * @defaultValue 1
   */
  h?: number | `${number}` | undefined;

  /**
   * @defaultValue 'auto'
   */
  x?: number | `${number}` | 'auto' | undefined;

  /**
   * @defaultValue 'auto'
   */
  y?: number | `${number}` | 'auto' | undefined;

  /**
   * @defaultValue false
   */
  cover?: boolean | undefined;

  /**
   * @defaultValue false
   */
  subgrid?: boolean | undefined;

  /**
   * Re-render on click.
   *
   * @defaultValue false
   */
  refreshable?: boolean | undefined;
}
