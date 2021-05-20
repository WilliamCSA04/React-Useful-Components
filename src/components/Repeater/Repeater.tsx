import React from 'react';
import validator from '../helpers';
import { RepeaterPropTypes } from './Repeater.types';

function propsValidator(
  props: Omit<RepeaterPropTypes, 'htmlTag' | 'children'>,
) {
  const errors = [
    ...validator(props.replicableProps).Object().errors,
    ...validator(props.specificProps).Array().errors,
    ...validator(props.startsWith).Range().errors,
    ...validator(props.min).Range().errors,
    ...validator(props.max).Range().errors,
  ];
  if (errors.length) {
    throw new Error(errors.join(','));
  }
}

export default function Repeater(props: RepeaterPropTypes) {
  const { htmlTag, ...otherProps } = props;
  propsValidator(otherProps);
  const {
    replicableProps = {},
    specificProps = [],
    max = Number.MAX_SAFE_INTEGER,
    min = 0,
    startsWith = 1,
  } = otherProps;

  const allElements = Array(startsWith).map(() => React.createElement(htmlTag));
  return <>{allElements}</>;
}
