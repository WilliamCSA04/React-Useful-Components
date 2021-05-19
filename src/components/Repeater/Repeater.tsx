import React from 'react';
import { RepeaterPropTypes } from './Repeater.types';

export default function Repeater(props: RepeaterPropTypes) {
  const {
    children,
    htmlTag,
    replicableProps = {},
    specificProps = [],
    max = Number.MAX_SAFE_INTEGER,
    min = 0,
    startsWith = 1,
  } = props;
  React.createElement();
  return <></>;
}
