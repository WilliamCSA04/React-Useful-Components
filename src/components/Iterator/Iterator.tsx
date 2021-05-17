import React from 'react';
import { IteratorPropTypes } from './Iterator.types';

export default function Iterator<ItemsOnListType>(
  props: IteratorPropTypes<ItemsOnListType>,
) {
  const { list, onRender } = props;
  return <>{list.map(onRender)}</>;
}
