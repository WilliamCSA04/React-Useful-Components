export interface IteratorPropTypes<T, K> {
  list: Array<T>;
  onRender: (prop: T, index: number, originalList: Array<T>) => JSX.Element;
  onFallback?: (props: Record<string, K>) => JSX.Element;
  onFallbackProps?: Record<string, K>;
}
