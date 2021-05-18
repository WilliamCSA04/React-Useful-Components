/**
 * @interface IteratorPropTypes
 * @param list Data list that will be accessible by onRender
 * @param onRender React function used to map list
 * @param onFallback React function that will be executed if list is empty
 * @param onFallbackProps Props that will used as onFallback props
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export interface IteratorPropTypes<T, K> {
  list: Array<T>;
  onRender: (prop: T, index: number, originalList: Array<T>) => JSX.Element;
  onFallback?: (props: K) => JSX.Element;
  onFallbackProps?: K;
}
