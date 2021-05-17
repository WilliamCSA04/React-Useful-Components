import React from 'react';
import { IteratorPropTypes } from './Iterator.types';

export default function Iterator<ItemsOnListType, FallbackProps>(
  props: IteratorPropTypes<ItemsOnListType, FallbackProps>,
) {
  const {
    list,
    onRender,
    onFallback = () => null,
    onFallbackProps = {},
  } = props;
  if (list.length) {
    return <>{list.map(onRender)}</>;
  }
  return <>{onFallback(onFallbackProps)}</>;
}
