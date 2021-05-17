import React from 'react';
import { ConditionalRendererPropTypes } from './ConditionalRenderer.types';

export const ConditionalRenderer = (props: ConditionalRendererPropTypes) => {
  const { condition, onSuccess, onFailure = () => null } = props;
  if (condition) {
    return <>{onSuccess()}</>;
  }
  return <>{onFailure()}</>;
};

export default ConditionalRenderer;
