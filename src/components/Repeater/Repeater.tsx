import React, { useCallback, useMemo, memo } from 'react';
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

function Repeater(props: RepeaterPropTypes) {
  const {
    htmlTag,
    replicableProps = {},
    specificProps = [],
    max = Number.MAX_SAFE_INTEGER,
    min = 0,
    startsWith = 1,
  } = props;

  propsValidator({
    specificProps,
    max,
    min,
    startsWith,
    replicableProps,
  });

  const mapper = useCallback(
    () => React.createElement(htmlTag, {
      ...replicableProps,
      key: Date.now(),
    }),
    [],
  );

  const allElements = useMemo(
    () => Array(startsWith).fill(null).map(mapper),
    [],
  );
  return <>{allElements}</>;
}

export default memo(Repeater);
