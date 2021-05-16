import React from 'react';

export default function Iterator<ItemsOnListType> (props: IteratorPropTypes<ItemsOnListType>) {
  const { list, onRender } = props;
  return (
    <>
      {list.map((prop, index, originalList) => onRender(prop, index, originalList))}
    </>
  )
}
