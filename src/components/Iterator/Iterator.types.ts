interface IteratorPropTypes<T> {
  list: Array<T>;
  onRender: (prop: T, index: number, originalList: Array<T>) => JSX.Element;
}
