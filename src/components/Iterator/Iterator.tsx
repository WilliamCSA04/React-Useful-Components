import React from 'react';
import { IteratorPropTypes } from './Iterator.types';

// eslint-disable-next-line @typescript-eslint/ban-types
export default function Iterator<ItemsOnListType, FallbackProps extends object>(
  props: IteratorPropTypes<ItemsOnListType, FallbackProps | undefined>,
) {
  const {
    list, onRender, onFallback = () => null, onFallbackProps,
  } = props;
  if (list.length) {
    return <>{list.map(onRender)}</>;
  }
  return <>{onFallback(onFallbackProps)}</>;
}
